const ID_GOOGLE_ADS = "AW-18425425968";
const ID_GOOGLE_ANALYTICS = "G-FRG6QKT410";

export default function TagGoogle() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ID_GOOGLE_ADS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ID_GOOGLE_ADS}');
gtag('config', '${ID_GOOGLE_ANALYTICS}');`,
        }}
      />
    </>
  );
}
