import React from 'react';
import ImageCustom from '../image-custom';
import emailIcon from '@/assets/images/contacts/email-icon.png';
import lineIcon from '@/assets/images/contacts/line-icon.png';
import teleIcon from '@/assets/images/contacts/tele-icon.png';
import mbIcon from '@/assets/images/contacts/mb-icon.png';
import zaloIcon from '@/assets/images/contacts/zalo-icon.png';
import waIcon from '@/assets/images/contacts/wa-icon.png';
import FaceBook from '../facebook';

const contacts = [
  {
    title: 'Contact us by Email',
    link: 'mailto:%20reservation@chapaexpresstrain.com.vn',
    image: emailIcon.src,
  },
  {
    title: 'Contact us by Line',
    link: 'https://line.me/R/ti/p/84912200683',
    image: lineIcon.src,
  },
  {
    title: 'Contact us by Telegram',
    link: 'https://telegram.im/@ChapaExpressTrain',
    image: teleIcon.src,
  },
  {
    title: 'Contact us by Phone',
    link: 'tel:+84912200683',
    image: mbIcon.src,
  },
  {
    title: 'Contact us by Zalo',
    link: 'https://zalo.me/0912200683',
    image: zaloIcon.src,
  },
  {
    title: 'Contact us by WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=84912200683',
    image: waIcon.src,
  },
];

type Props = {};

const ContactInformation = (props: Props) => {
  return (
    <div className="fixed bottom-0 right-0 z-[9999]">
      <div className="p-3">
        <ul className="space-y-2">
          <li>
            <div className="relative w-11 h-11 rounded-full">
              <FaceBook />
            </div>
          </li>
          {contacts.map((contact, index) => (
            <li key={index}>
              <a title={contact.title} href={contact.link} target="_blank">
                <div className="relative w-11 h-11 rounded-full">
                  <ImageCustom
                    image_alt={contact.title}
                    src={contact.image}
                    className="rounded-full"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInformation;
