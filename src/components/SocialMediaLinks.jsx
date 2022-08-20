import "/src/assets/Global.css";

export const SocialMediaLinks = ({ children }) => {
  return (
    <div className="social-media-links d-flex flex-column align-self-end justify-self-end">
      {children}
    </div>
  );
};
