import { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";
import { ITransformCharacter } from "../../interfaces/ITransformCharacter";
import CSS from "csstype";

const RandomChar = () => {
  const defaultChar = {
    id: 0,
    name: "",
    description: "",
    thumbnail: "",
    homepage: "",
    wiki: "",
    comics: [
      {
        resourceURI: "",
        name: "",
        type: "",
      },
    ],
  };

  const [char, setShar] = useState<ITransformCharacter>(defaultChar);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, []);

  const onCharLoaded = (char: ITransformCharacter) => {
    setShar(char);
    setLoading(false);
    setError(false);
  };

  const onCharLoading = () => {
    setLoading(true);
    setError(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    onCharLoading();
    marvelService
      .getCharacter(id)
      .then((responce) => onCharLoaded(responce))
      .catch(onError);
  };

  const View = ({ char }: { char: ITransformCharacter }) => {
    const { name, description, thumbnail, homepage, wiki } = char;
    const imgStyle: CSS.Properties = { objectFit: "cover" };

    if (
      thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
    ) {
      imgStyle.objectFit = "contain";
    }

    return (
      <div className="randomchar__block">
        <div className="randomchar__img">
          <img src={thumbnail} alt="Random character" style={imgStyle} />
        </div>
        <div className="randomchar__info">
          <div className="randomchar__description">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">{description}</p>
          </div>
          <div className="randomchar__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="randomchar">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            {error ? <ErrorMessage /> : null}
            {loading ? <Spinner /> : null}
            {!(loading || error) ? <View char={char} /> : null}
          </div>
          <div className="col-12 col-lg-6">
            <div className="randomchar__static">
              <p className="randomchar__title">
                Random character for today!
                <br />
                Do you want to get to know him better?
              </p>
              <p className="randomchar__title">Or choose another one</p>
              <button onClick={updateChar} className="button button__main">
                <div className="inner">try it</div>
              </button>
              <img
                src={mjolnir}
                alt="mjolnir"
                className="randomchar__decoration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomChar;
