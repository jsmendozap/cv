import React from "react";
import { useLang } from "../context/Lang";
import grad from "../media/mortarboard.png";
import Title from "../components/Title";
import { Avatar, List } from 'antd';

const Education = ({ title, subtitle, info }) => {
  const { lang } = useLang();
  const currentInfo = lang === "en" ? info.en : info.es;
  
  const formalData = [
    {
      title: currentInfo[1]
    },
    {
      title: currentInfo[3]
    }
  ]

  const complData = [
    {
      title: currentInfo[6]
    },
    {
      title: currentInfo[8]
    }
  ]

  return (
    <div className="mt-8 mx-8 sm:mx-16 sm:mb-5 lg:ml-72 lg:mr-20 xl:ml-96 xl:mr-32 xl:mt-16"> 
      <Title title={title} subtitle={subtitle} />
      <p className="font-semibold text-sm lg:text-lg xl:text-2xl mb-3 text-left mt-10">
        {currentInfo[0]}
      </p>
      <List className="text-left"
        itemLayout="horizontal"
        dataSource={formalData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta 
              avatar={index == 0 ? <Avatar src={grad} /> : null}
              title={<span className="text-xs lg:text-sm xl:text-lg">{item.title}</span>}
              description={<span className="text-xs lg:text-sm xl:text-lg">{index === 0 ? currentInfo[2] : currentInfo[4]}</span>}
            />
          </List.Item>
        )}
      />
      <p className="font-semibold text-sm lg:text-lg xl:text-2xl mb-3 text-left mt-3">
        {currentInfo[5]}
      </p>
      <List className="text-left"
        itemLayout="horizontal"
        dataSource={complData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta 
              avatar={<Avatar src={grad} />}
              title={<span className="text-xs lg:text-sm xl:text-lg">{item.title}</span>}
              description={<span className="text-xs lg:text-sm xl:text-lg">{index === 0 ? currentInfo[7] : currentInfo[9]}</span>}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Education;
