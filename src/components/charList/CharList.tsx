import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";
import CSS from "csstype";
import "./charList.scss";
import { ITransformCharacter } from "../../interfaces/ITransformCharacter";

const CharList = ({
  onCharSelected,
}: {
  onCharSelected: (id: number) => void;
}) => {
  const [charList, setCharList] = useState<ITransformCharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [newItemLoading, setNewItemLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(210);
  const [charEnded, setCharEnded] = useState<boolean>(false);

  const marvelService = new MarvelService();
  const itemRefs: HTMLLIElement[] = [];

  useEffect(() => {
    onRequest(offset);
  }, []);

  const onRequest = (offset: number) => {
    onCharListLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharListLoaded)
      .catch(onError);
  };

  const onCharListLoading = () => {
    setNewItemLoading(true);
  };

  const onCharListLoaded = (newCharList: ITransformCharacter[]) => {
    let ended = false;

    if (newCharList.length < 9) {
      ended = true;
    }

    setCharList((prevState) => [...prevState, ...newCharList]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset((prevState) => prevState + 9);
    setCharEnded(ended);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  const setRef = (ref: HTMLLIElement) => {
    itemRefs.push(ref);
  };

  const focusOnItem = (id: number) => {
    itemRefs.forEach((item) => item.classList.remove("char__item_selected"));
    itemRefs[id].classList.add("char__item_selected");
    itemRefs[id].focus();
  };

  const renderItems = (arr: ITransformCharacter[]) => {
    const items = arr.map((item, index: number) => {
      let imgStyle: CSS.Properties = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle.objectFit = "unset";
      }

      return (
        <li
          className="char__item"
          tabIndex={0}
          ref={setRef}
          key={item.id}
          onClick={() => {
            onCharSelected(item.id);
            focusOnItem(index);
          }}
          onKeyPress={(e) => {
            if (e.key === " " || e.key === "Enter") {
              onCharSelected(item.id);
              focusOnItem(index);
            }
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <p className="char__name">{item.name}</p>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  };

  return (
    <div className="char__list">
      {error ? <ErrorMessage /> : null}
      {loading ? <Spinner /> : null}
      {!(loading || error) ? renderItems(charList) : null}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
