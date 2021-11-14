import React, { useEffect, useRef, useState } from "react";

const ShortenBox = () => {
  const [link, setLink] = useState("");
  const [shortedLink, setShortedLink] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const [isEmpty, setIsEmpty] = useState(true);

  const shortenInput = useRef(null)

  useEffect(()=>{
    async function initialCall() {
      const response = await fetch(
        "https://api.shrtco.de/v2/shorten?url=facebook.com"
      );
    }
    initialCall()
    
  },[])

  try{
    shortenInput.current.onkeyup = (e)=>{
      if(e.keyCode == 13){
        link !== "" ? get(link) : setIsEmpty(false)
      }
    }
  }
  catch(e){
    
  }

  async function get() {
    const response = await fetch(
      "https://api.shrtco.de/v2/shorten?url=" + link
    );
    const data = await response.json();
    if (data.ok) {
      setShortedLink([...shortedLink, { data, link }]);
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    setIsEmpty(true);
  }



  return (
    <>
      <div className="shortenBox">
        <input
          type="text"
          value={link}
          placeholder="shorten a link"
          onChange={(e) => setLink(e.target.value)}
          className={isEmpty == false ? "input-error" : ""}
          ref={shortenInput}
        />
        {isEmpty || <p className="errorMessage">please add a link</p>}
        {isValid || <p className="errorMessage">the link is unvalid</p>}

        <button
          onClick={() => (link !== "" ? get(link) : setIsEmpty(false))}
          className="btn"
        >
          Shorten It!
        </button>
      </div>

      <div>
        {shortedLink.map((e) => {
          const { code, short_link } = e.data.result;
          return (
            <ShortedLinks
              key={`${code}${Math.random().toString(16).slice(2)}`}
              name={e.link}
              shortedLinks={short_link}
            />
          );
        })}
      </div>
    </>
  );
};

const ShortedLinks = (props) => {
  return (
    <div className="shortedLinksContainer">
      <span>{props.name}</span>
      <hr />
      <div>
        <span className="shortedLinks">{props.shortedLinks}</span>
      </div>
      <CopyButton short_link={props.shortedLinks} />
    </div>
  );
};

const CopyButton = (props) => {
  const [copyStatus, setCopyStatus] = useState({
    copied: false,
    btn: "copyButton",
  });
  function copyme(e) {
    navigator.clipboard.writeText(e);
  }
  function myFunction() {
    // console.log("dsd");
    setTimeout(function () {
      setCopyStatus({ copied: true, btn: "copyButton" });
    }, 3000);
  }
  return (
    <button
      className={copyStatus.btn}
      onClick={() => {
        setCopyStatus({ btn: "btn-clicked", copied: true });
        copyme(props.short_link);
        myFunction();
      }}
    >
      {copyStatus.copied !== true ? "Copy" : "Copied!!"}
    </button>
  );
};

export default ShortenBox;
