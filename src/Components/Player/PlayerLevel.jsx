import React from "react";
import "../../css/Player/PLayerLevel.css";
import avatar from "../../img/Avacontent.svg";
import ratioUP from "../../img/ratio up.png";
import pencil from "../../img/pencil.png";

const PlayerLevel = () => {
  return (
    <div>
      <div className="content_block_left_side_container left_side_container">
        <div className="content_block_left_side_container_up left_side_container">
          <img src={avatar} alt="logo_player" className="content_avatar" />
          <div className="left_side_container_info">
            <div className="left_side_container_info_rang">
              <p>89.40</p>
              <div className="left_side_container_info_rang_row">
                <p>999</p>
                <img src={ratioUP} alt="pgUp" className="ratio_up" />
              </div>
            </div>
            <p className="left_side_container_info-p">Пётр Чех</p>
          </div>
        </div>
        <div className="content_block_left_side_footer">
          <img src={pencil} alt="pencil" className="pencil_left_side" />
          <p className="content_block_left_side_footer-p">Редактировать</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerLevel;
