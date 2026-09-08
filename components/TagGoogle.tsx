const ID_TAG_GOOGLE = "AW-18425425968";

export default function TagGoogle() {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ID_TAG_GOOGLE}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ID_TAG_GOOGLE}');`,
        }}
      />
    </>
  );
}
