// import React from "react";
// import { useSelector } from "react-redux";
// import ImageComp from "../../ImageComp";
// import stackover from "../../images/stackover.png";
// import youtube from "../../images/youtubes.png";
// import insta from "../../images/insta.png";

// const SocialComp = () => {
//   const {
//     facebooklinks,
//     twitterlinks,
//     linkedInLinklinks,
//     instalinks,
//     Stackoverflowlinks,
//     Youtubelink,
//     custemlink,
//   } = useSelector((state) => state.social);

//   const { lineHeight } = useSelector((state) => state.design);
//   // const socialImages = useSelector((state) => state.counter.socialImages);
//   const socialImages = useSelector((state) => state.social.socialImages);

//   return (
//     <>
//       <tr style={{ float: "left" }}>
//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.facebook.com/${facebooklinks}`}>
//             {
//               facebooklinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05facebook.gif" />
//             }
//           </a>
//         </td>
//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.twitter.com/${twitterlinks}`}>
//             {
//               twitterlinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/twitter/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05twitter.gif" />
//             }
//           </a>
//         </td>
//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.linkedin.com/${linkedInLinklinks}`}>
//             {
//               linkedInLinklinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/linkedin/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif" />
//             }
//           </a>
//         </td>
//         {/* <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.twitter.com/${Stackoverflowlinks}`}>
//             {
//               Stackoverflowlinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/stackoverflow/3b5998/40/0/transparent.png" />
//               ) : null
//               // <img src={stackover} style={{ width: "25px", height: "25px" }} />
//             }
//           </a>
//         </td>

//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.linkedin.com/${Youtubelink}`}>
//             {
//               Youtubelink !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/youtube/3b5998/40/0/transparent.png" />
//               ) : null
//               // <img src={youtube} style={{ width: "25px", height: "25px" }} />
//             }
//           </a>
//         </td>

//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.google.com/${instalinks}`}>
//             {
//               instalinks !== "" ? (
//                 <ImageComp src="https://cdn.gifo.wisestamp.com/social/instagram/3b5998/30/0/transparent.png" />
//               ) : null
//               // <img src={insta} style={{ width: "25px", height: "25px" }} />
//             }
//           </a>
//         </td> */}

//         <td
//           style={{
//             paddingRight: "3px",
//           }}
//         >
//           <a href={`http://www.google.com/${custemlink}`}>
//             {custemlink !== "" ? (
//               <img
//                 src={socialImages === "" ? null : socialImages}
//                 style={{ width: "25px", height: "25px" }}
//               />
//             ) : // <img src={insta} style={{ width: "25px", height: "25px" }} />
//             null}
//           </a>
//         </td>
//       </tr>
//     </>
//   );
// };

// export default SocialComp;

import React from "react";
import { useSelector } from "react-redux";
import ImageComp from "../../ImageComp";
import stackover from "../../images/stackover.png";
import youtube from "../../images/youtubes.png";
import insta from "../../images/insta.png";

const SocialComp = () => {
  const {
    facebooklinks,
    twitterlinks,
    linkedInLinklinks,
    instalinks,
    Stackoverflowlinks,
    Youtubelink,
    custemlink,
  } = useSelector((state) => state.social);

  const { lineHeight } = useSelector((state) => state.design);
  // const socialImages = useSelector((state) => state.counter.socialImages);
  const socialImages = useSelector((state) => state.social.socialImages);

  return (
    <>
      <a href={`http://www.facebook.com/${facebooklinks}`}>
        {
          facebooklinks !== "" ? (
            <ImageComp src="https://cdn.gifo.wisestamp.com/social/facebook/3b5998/30/0/transparent.png" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05facebook.gif" />
        }
      </a>

      <a href={`http://www.twitter.com/${twitterlinks}`}>
        {
          twitterlinks !== "" ? (
            <ImageComp src="https://cdn.gifo.wisestamp.com/social/twitter/3b5998/30/0/transparent.png" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05twitter.gif" />
        }
      </a>

      <a href={`http://www.linkedin.com/${linkedInLinklinks}`}>
        {
          linkedInLinklinks !== "" ? (
            <ImageComp src="https://cdn.gifo.wisestamp.com/social/linkedin/3b5998/30/0/transparent.png" />
          ) : null
          // <img src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/171616/05linkedin.gif" />
        }
      </a>

      <a href={`http://www.google.com/${custemlink}`}>
        {custemlink !== "" ? (
          <img
            src={socialImages === "" ? null : socialImages}
            style={{ width: "25px", height: "25px" }}
          />
        ) : // <img src={insta} style={{ width: "25px", height: "25px" }} />
        null}
      </a>
    </>
  );
};

export default SocialComp;
