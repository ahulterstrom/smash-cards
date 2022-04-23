export const getCardName = (cardName: string | undefined) => {
  if (cardName) {
    return cardName;
  }
  return "Smash Card";
};

export const getBackgroundSource = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "bmarble.jpg";
    case "uncommon":
      return "marble.jpg";
    case "busted":
      return "gold.jpg";
  }
};

export const getRarityInitial = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "C";
    case "uncommon":
      return "U";
    case "busted":
      return "B";
  }
};

export const getCardImage = (src: string | undefined) => {
  if (src) {
    return src;
  }
  return getRandomCardImage();
};

export const getColorTheme = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "rgba(180,180,180,0.6)";
    case "uncommon":
      return "rgba(255,255,255,0.85)";
    case "busted":
      return "rgba(246,232,187,0.6)";
  }
};

export const getCardText = (cardType: string, cardEffect: string) => {
  return `${getTextFromCardType(cardType)}${cardEffect}`;
};

export const getFontSize = (cardText: string) => {
  const length = cardText.length;
  switch (true) {
    case length < 150:
      return "12px";
    case length < 200:
      return "11px";
    case length < 250:
      return "10px";
    case length < 300:
      return "9px";
  }
  return "8px";
};

export const getTextFromCardType = (cardType: string) => {
  switch (cardType) {
    case "Counter":
      return "Any time your opponent plays a cards you may play this card. ";
  }
  return "";
};

export const getRandomCardImage = () => {
  switch (Math.floor(Math.random() * 99)) {
    case 0:
      return "https://pbs.twimg.com/media/EuW4gesVEAALEwY?format=jpg&name=large";
    case 1:
      return "https://m.media-amazon.com/images/I/81WNTWqviqL._AC_SL1500_.jpg";
    case 2:
      return "https://cdn.vox-cdn.com/thumbor/_2hCxI32KSrw3k2CxZg2vYVso88=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/60754399/vlcsnap_2018_06_12_12h22m11s267.0.jpg";
    case 3:
      return "https://venturebeat.com/wp-content/uploads/2018/06/Super-Smash-Bros-Switch-E3-2018.jpg?fit=1159%2C643&strip=all";
    case 4:
      return "https://assets.nintendo.com/image/upload/f_auto,q_auto,w_960,h_540/ncom/en_US/games/switch/s/super-smash-bros-ultimate-switch/Video/posters/Smash_Ultimate_Accolades_Trailer";
    case 5:
      return "https://corporate.bestbuy.com/wp-content/uploads/2018/12/Super-Smash-Bros_For-Blog.jpg";
    case 6:
      return "https://imgix.bustle.com/uploads/image/2021/10/27/9f1f73fa-ba20-40fc-bd69-1b7ce3b193f8-illustration_-_super_smash_bros_ultimate.jpeg?w=2000&h=640&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.636&fp-y=0.1583";
    case 7:
      return "https://cdn1.dotesports.com/wp-content/uploads/2019/01/21092532/Nintendo-Super-Smash-Bros-Ultimate-Stars.jpg";
    case 8:
      return "https://venturebeat.com/wp-content/uploads/2019/04/jokersmash.jpg?fit=1630%2C917&strip=all";
    case 9:
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJpy9L11mY8rVx_zTGGlXU8FW7PSRkqA2SxA&usqp=CAU";
    case 10:
      return "https://images.nintendolife.com/5f9963cb6598a/smash-ultimate.large.jpg";
    case 11:
      return "https://images.nintendolife.com/9950b60da90d1/smash-ultimate.large.jpg";
    case 12:
      return "https://i.insider.com/5c12882277a1654ba6738df1?width=1200&format=jpeg";
    case 13:
      return "https://cdn.arstechnica.net/wp-content/uploads/2018/12/smash-bros-faceoff.jpg";
    case 14:
      return "https://d.newsweek.com/en/full/1749933/super-smash-bros-ultimate-version-110-pyra.jpg?w=790&f=33c0fec30420ecc207502101512cd25f";
    case 15:
      return "https://i.gadgets360cdn.com/large/super_smash_bros_roster_1543405652071.jpg";
    case 16:
      return "https://cdn.vox-cdn.com/thumbor/8od-gSnsLWWN-9xb-8bC2r_OPxQ=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/62634456/Nov_SSB_scrn115.0.jpg";
    case 17:
      return "https://media.gamestop.com/i/gamestop/10159620_SCR17/Super-Smash-Bros.-Ultimate---Nintendo-Switch?$screen$";
    case 18:
      return "https://www.smashbros.com/assets_v2/img/movie/20201001_1.jpg";
    case 19:
      return "https://i.insider.com/5c112ee42ea7de2fca3b2ff9?width=1136&format=jpeg";
    case 20:
      return "https://cdn.vox-cdn.com/thumbor/idAgDexjuqWvJNgS4Ai4nxtbDww=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/62716783/Nov_SSB_scrn006_BMP_jpgcopy.0.jpg";
    case 21:
      return "https://cdn.mos.cms.futurecdn.net/h9LmpowN5kXx7g7vGJY9WF.jpg";
    case 22:
      return "https://cdn.mos.cms.futurecdn.net/4Hb7hkMwTqwLJLqHzyioeL-1200-80.jpg";
    case 23:
      return "https://cdn.vox-cdn.com/thumbor/dZXuSOc3Mu0jcD7ouWJoJdI26ls=/0x0:1280x720/1200x800/filters:focal(683x195:887x399)/cdn.vox-cdn.com/uploads/chorus_image/image/62719018/Isabelle_Smash.0.jpg";
    case 24:
      return "https://www.dexerto.com/wp-content/uploads/2020/01/fire-emblem-fans-mad-smash-bros-blythe.jpg";
    case 25:
      return "https://d28ipuewd7cdcq.cloudfront.net/assets/article/2018/12/07/super-smash-brothers-feature_feature.jpg";
    case 26:
      return "https://assets.gamepur.com/wp-content/uploads/2021/10/05111602/image-10.jpg";
    case 27:
      return "https://www.dailydot.com/wp-content/uploads/2018/11/Super-Smash-Bros-Ultimate-Memes.jpg";
    case 28:
      return "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/01/22/d773ae20-dcf5-4c1f-92bd-916b2e9cd4d6/super-smash-bros-ultimate-screenshot";
    case 29:
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkTRe7uaCiTxGzFnQOXxz-xHoZjIv-tqvfA&usqp=CAU";
    case 30:
      return "https://images.purexbox.com/57164bfb63084/dragonborn.large.jpg";
    case 31:
      return "https://media.gamestop.com/i/gamestop/10159620_SCR18/Super-Smash-Bros.-Ultimate---Nintendo-Switch?$screen$";
    case 32:
      return "https://cdn1.dotesports.com/wp-content/uploads/2021/03/21202057/EsAnnXJW8AUnJVb.jpg";
    case 33:
      return "https://static.invenglobal.com/upload/image/2021/08/29/i1630263864941937.jpeg";
    case 35:
      return "https://pbs.twimg.com/media/FCdhX_nUcAMO_u9?format=jpg&name=large";
    case 36:
      return "https://pbs.twimg.com/media/FCdDeMOVUAMoQGO?format=jpg&name=large";
    case 37:
      return "https://pbs.twimg.com/media/FCdCIq1UcAEUX9x?format=jpg&name=large";
    case 38:
      return "https://pbs.twimg.com/media/FCdBf5FVQAM5SGE?format=jpg&name=large";
    case 39:
      return "https://pbs.twimg.com/media/FCdAw10UUAEddcV?format=jpg&name=large";
    case 40:
      return "https://pbs.twimg.com/media/FCdAiC3VIAEb_gF?format=jpg&name=large";
    case 41:
      return "https://pbs.twimg.com/media/FCdfhr7UUAg3sOZ?format=jpg&name=large";
    case 42:
      return "https://pbs.twimg.com/media/FCdfT0QVUAkuMip?format=jpg&name=large";
    case 43:
      return "https://pbs.twimg.com/media/FCdemRVVcAM1tf3?format=jpg&name=large";
    case 44:
      return "https://pbs.twimg.com/media/E6KppMsUcAUDIBS?format=jpg&name=large";
    case 45:
      return "https://pbs.twimg.com/media/E6KpVpmUYAIv9KY?format=jpg&name=large";
    case 46:
      return "https://pbs.twimg.com/media/E6Ko6ylVgAMD9gq?format=jpg&name=large";
    case 47:
      return "https://pbs.twimg.com/media/E6Kowl6VgAYZEyM?format=jpg&name=large";
    case 48:
      return "https://pbs.twimg.com/media/E6Kof_fVIAY8CV_?format=jpg&name=large";
    case 49:
      return "https://pbs.twimg.com/media/E6KoBreVIBgA3ME?format=jpg&name=large";
    case 50:
      return "https://pbs.twimg.com/media/E6Kn4m_UUAAMy3K?format=jpg&name=large";
    case 51:
      return "https://pbs.twimg.com/media/E6KngbbVEAENJqI?format=jpg&name=large";
    case 52:
      return "https://pbs.twimg.com/media/E6KnML3UYAAr6zd?format=jpg&name=large";
    case 53:
      return "https://pbs.twimg.com/media/E6Km0MIVkAMEK67?format=jpg&name=large";
    case 54:
      return "https://pbs.twimg.com/media/E6KmkKRVUAcUcv5?format=jpg&name=large";
    case 55:
      return "https://pbs.twimg.com/media/E6KmO_8VkAgy6or?format=jpg&name=large";
    case 56:
      return "https://pbs.twimg.com/media/FCdeV_AVcAUbOQa?format=jpg&name=large";
    case 57:
      return "https://pbs.twimg.com/media/E6KkueZVIAE0sX1?format=jpg&name=large";
    case 58:
      return "https://pbs.twimg.com/media/FCdeFZkVEAcmN4C?format=jpg&name=large";
    case 59:
      return "https://pbs.twimg.com/media/FCddLU5VkAIxD1a?format=jpg&name=large";
    case 60:
      return "https://pbs.twimg.com/media/FCdg41kVcAAskyF?format=jpg&name=large";
    case 61:
      return "https://pbs.twimg.com/media/FCdcx9cVcAQNwEk?format=jpg&name=large";
    case 62:
      return "https://pbs.twimg.com/media/FCdb4-sVcAMc95s?format=jpg&name=large";
    case 63:
      return "https://pbs.twimg.com/media/E6Kh5QCVEAUZW1o?format=jpg&name=large";
    case 64:
      return "https://pbs.twimg.com/media/FCdV0f7VgAIa9ee?format=jpg&name=large";
    case 65:
      return "https://pbs.twimg.com/media/FBLDhZ8VcAAWCkf?format=jpg&name=large";
    case 66:
      return "https://pbs.twimg.com/media/FA1C6GMVkAAK97B?format=jpg&name=large";
    case 67:
      return "https://pbs.twimg.com/media/FAROeAbUYAA6stJ?format=jpg&name=large";
    case 68:
      return "https://pbs.twimg.com/media/E9r7KPBVIAAHumB?format=jpg&name=large";
    case 69:
      return "https://pbs.twimg.com/media/E6KcthAVIAAYNDA?format=jpg&name=large";
    case 70:
      return "https://pbs.twimg.com/media/E9r4bwiVgAA4JqU?format=jpg&name=large";
    case 71:
      return "https://pbs.twimg.com/media/E9r4QikUUAEIScn?format=jpg&name=large";
    case 72:
      return "https://pbs.twimg.com/media/E9r38KhVcAEx79N?format=jpg&name=large";
    case 73:
      return "https://pbs.twimg.com/media/E6KYIWBUcAQWiUq?format=jpg&name=large";
    case 74:
      return "https://pbs.twimg.com/media/E6KXvZEVIAIYg5E?format=jpg&name=large";
    case 75:
      return "https://pbs.twimg.com/media/E6LQ6YKVkAAoCMS?format=jpg&name=large";
    case 76:
      return "https://pbs.twimg.com/media/E7XRtRwUcAUNOlZ?format=jpg&name=large";
    case 77:
      return "https://pbs.twimg.com/media/E7XRWP-VEAE_d4h?format=jpg&name=large";
    case 78:
      return "https://pbs.twimg.com/media/E7XPtQ6VEAMfNd6?format=jpg&name=large";
    case 79:
      return "https://pbs.twimg.com/media/E7XPRvTUcAUyXCT?format=jpg&name=large";
    case 80:
      return "https://pbs.twimg.com/media/E7XOpurVgAURQz7?format=jpg&name=large";
    case 81:
      return "https://pbs.twimg.com/media/E7XNxhDUcAYrLkF?format=jpg&name=large";
    case 82:
      return "https://pbs.twimg.com/media/E6KU7g2VEAM49EW?format=jpg&name=large";
    case 83:
      return "https://pbs.twimg.com/media/E7MBXw5VgAAMR0t?format=jpg&name=large";
    case 84:
      return "https://pbs.twimg.com/media/E5lZrPwUUAQa5wm?format=jpg&name=large";
    case 85:
      return "https://pbs.twimg.com/media/E1pRsJ9VoAAhJ-6?format=jpg&name=large";
    case 86:
      return "https://pbs.twimg.com/media/E1o6dP4UYAECSzA?format=jpg&name=large";
    case 87:
      return "https://pbs.twimg.com/media/E4-9L4_VoAcp3wT?format=jpg&name=large";
    case 88:
      return "https://pbs.twimg.com/media/E1otTjhVgAEDMM9?format=jpg&name=large";
    case 89:
      return "https://pbs.twimg.com/media/E3-L27WVcAQxg4l?format=jpg&name=large";
    case 90:
      return "https://pbs.twimg.com/media/E3-Nx6qUcAEsMHv?format=jpg&name=large";
    case 91:
      return "https://pbs.twimg.com/media/E23SYymVUAMx6Ta?format=jpg&name=large";
    case 92:
      return "https://pbs.twimg.com/media/E2aBKT9UYAc8-nq?format=jpg&name=large";
    case 93:
      return "https://pbs.twimg.com/media/Ez3njCYVoAEupul?format=jpg&name=large";
    case 94:
      return "https://pbs.twimg.com/media/Ez4ejr6UUAI6VGs?format=jpg&name=large";
    case 95:
      return "https://pbs.twimg.com/media/Ez3mnupVcAAUa-_?format=jpg&name=large";
    case 96:
      return "https://pbs.twimg.com/media/Ez4ceRVVUAELL6Q?format=jpg&name=large";
    case 97:
      return "https://pbs.twimg.com/media/Ez4dmk7VkAQ75lU?format=jpg&name=large";
    case 98:
      return "https://pbs.twimg.com/media/Ez3v6oJUcAEBy_G?format=jpg&name=large";
    case 99:
      return "https://pbs.twimg.com/media/Ez3uyEEUUAIBu5w?format=jpg&name=large";
  }
};
