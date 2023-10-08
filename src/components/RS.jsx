import React, { useState } from "react";
import { useLang } from "../context/Lang";
import fnf_en from "../media/fnf_en.gif";
import fnf_es from "../media/fnf_es.gif";
import { Modal } from "antd";

const RS = ({ info }) => {
  const { lang } = useLang();
  const [isOpen, setOpen] = useState(false);

  const handleOk = () => {
    setOpen(false);
  };

  return (
    <div>
      <p
        className="text-justify text-lg mt-6 lg:mx-6"
        style={{ fontFamily: "Mukta" }}
      >
        {lang === "en" ? info.en.text[0] : info.es.text[0]}
      </p>
      <img
        src={lang === "en" ? fnf_en : fnf_es}
        className="h-72 cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      />
      <Modal
        width={750}
        open={isOpen}
        closable={false}
        footer={(_, { OkBtn }) => (
          <>
            <OkBtn className="bg-gray-800" />
          </>
        )}
        onOk={handleOk}
        okButtonProps={{ className: "bg-gray-700" }}
      >
        <img src={lang === "en" ? fnf_en : fnf_es} />
      </Modal>
    </div>
  );
};

export default RS;
