import { useEffect, useState } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import { ITransformCharacter } from "../../interfaces/ITransformCharacter";
import CSS from "csstype";
import "./charInfo.scss";

interface ICharId {
  charId: number | null;
}

const CharInfo = ({ charId }: ICharId) => {
  const [char, setChar] = useState<ITransformCharacter | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    updateChar();
  }, []);

  useEffect(() => {
    updateChar();
  }, [charId]);

  const onCharLoaded = (char: ITransformCharacter) => {
    setChar(char);
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
    if (!charId) {
      return;
    }

    onCharLoading();
    marvelService.getCharacter(charId).then(onCharLoaded).catch(onError);
  };

  return (
    <div className="char__info">
      {char || loading || error ? null : <Skeleton />}
      {error ? <ErrorMessage /> : null}
      {loading ? <Spinner /> : null}
      {!(loading || error || !char) ? <View char={char} /> : null}
    </div>
  );
};

const View = ({ char }: { char: ITransformCharacter }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  let imgStyle: CSS.Properties = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle.objectFit = "contain";
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <p className="char__descr">{description}</p>
      <p className="char__comics">Comics:</p>
      <ul className="char__comics-list">
        {comics.length === 0 ? "There are no comics here" : null}
        {comics.map((item, i) => {
          if (i < 10) {
            return (
              <li className="char__comics-item" key={i}>
                <p>{item.name}</p>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default CharInfo;
