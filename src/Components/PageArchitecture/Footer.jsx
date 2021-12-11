import React from "react";
import "../../css/footer.css";
import footerLogo from "../../img/Logo_white.png";
import appStore from "../../img/appstore.png";
import googlePlay from "../../img/googleplay.png";
import mobile from "../../img/phone_footer.png";
import mail from "../../img/mail_footer.png";
import inst from "../../img/IG_footer.png";
import vk from "../../img/VK.png";
import fb from "../../img/FB.png";
import ytb from "../../img/YT_footer.png";
import tg from "../../img/Telegram_footer.png";
import wp from "../../img/WA_footer.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper_content footer-content">
        <div className="footer-wrapper_content_up">
          <div className="content_up_left_side">
            <div className="content_up_left_side_logo">
              <img src={footerLogo} alt="footer-logo" />
            </div>
            <div className="content_up_left_side_markets">
              <img src={appStore} alt="app-store" className="app-store" />
              <img src={googlePlay} alt="google-play" className="google-play" />
            </div>
            <div className="content_up_left_side_contacts">
              <p className="content_up_left_side_contacts-p">Наши контакты</p>
              <div className="content_up_left_side_contacts-row1">
                <img src={mobile} alt="mobile" />
                <p className="content_up_left_side_contacts-row-p">
                  +7 (495) 109-03-09
                </p>
              </div>
              <div className="content_up_left_side_contacts-row2">
                <img src={mail} alt="mail" />
                <p className="content_up_left_side_contacts-row-p">
                  go@crossball.ru
                </p>
              </div>
            </div>
          </div>
          <div className="content_up_right_side">
            <div className="content_up_right_side_block">
              <p className="content_up_right_side_block-p">Разделы</p>
              <div className="content_up_right_side_block_list">
                <p>Главная</p>
                <p>Расписание</p>
                <p>Игровые отчёты</p>
                <p>Статистика</p>
              </div>
            </div>
            <div className="content_up_right_side_block">
              <p className="content_up_right_side_block-p">Виды спорта</p>
              <div className="content_up_right_side_block_list">
                <p>Футбол</p>
                <p>Баскетбол</p>
                <p>Волейбол </p>
              </div>
            </div>
            <div className="content_up_right_side_block">
              <p className="content_up_right_side_block-p">Полезное</p>
              <div className="content_up_right_side_block_list">
                <p>Как записаться?</p>
                <p>Ответы на вопросы</p>
                <p>Достижения</p>
              </div>
            </div>
            <div className="content_up_right_side_block">
              <p className="content_up_right_side_block-p">Информация</p>
              <div className="content_up_right_side_block_list">
                <p>Абонементы</p>
                <p>Корп. клиентам</p>
                <p>Партнёры</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper_content_down">
          <div className="footer-wrapper_content_down-text">
            © Все права защищены
          </div>
          <div>
            <img src={inst} alt="inst" className="social_footer_img_all" />
            <img src={vk} alt="vk" className="social_footer_img_all" />
            <img src={fb} alt="fb" className="social_footer_img_all" />
            <img src={ytb} alt="ytb" className="social_footer_img_all" />
            <img src={tg} alt="tg" className="social_footer_img_all" />
            <img src={wp} alt="wp" className="social_footer_img_all" />
          </div>
          <p className="footer-wrapper_content_down-p">
            {" "}
            Create by MIKKI KLAIN
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
