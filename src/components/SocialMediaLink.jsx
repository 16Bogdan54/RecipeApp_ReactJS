import "/src/assets/Global.css";

export const SocialMediaLink = ({ link, icon }) => {
  return (
    <a href={link} className="social-media-link my-2">
      {icon}
    </a>
  );
};
