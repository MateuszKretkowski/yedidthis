import tcdVinyl from "../../tcd_vinyl.jpg";
import tcdCd from "../../tcd_cd.webp";
import lrVinyl from "../../lr_vinyl.webp";
import lrCd from "../../lr_cd.png";
import gVinyl from "../../g_vinyl.webp";
import gCd from "../../g_cd.png";
import _080sVinyl from "../../080s_vinyl.jpg";
import _808sCd from "../../808s_cd.png";
import mbdtfVinyl from "../../mbdtf_vinyl.jpg";
import mbdtfCd from "../../mbdtf_cd.png";
import wttVinyl from "../../wtt_vinyl.jpg";
import wttCd from "../../wtt_cd.png";
import yeezusVinyl from "../../yeezus_vinyl.jpg";
import yeezusCd from "../../yeezus_cd.png";
import tlofVinyl from "../../tlof_vinyl.jpg";
import tlofCd from "../../tlof_cd.png";
import yeVinyl from "../../ye_vinyl.jpg";
import yeCd from "../../ye_cd.png";
import ksgVinyl from "../../ksg_vinyl.jpeg";
import ksgCd from "../../ksg_cd.png";
import jikVinyl from "../../jis_vinyl.jpg";
import jikCd from "../../jis_cd.png";
import dondaVinyl from "../../donda_vinyl.jpg";
import dondaCd from "../../donda_cd.png";

const albums = [
  {
    id: 1,
    albumclass: "tcd",
    vinylClass: "tcd_vinyl",
    vinylSrc: tcdVinyl,
    cdSrc: tcdCd,
    title: "The College Dropout",
    titleClass: "tcd_title",
    description: "The College Dropout (2004): Kanye West's debut album made a significant impact on the hip-hop scene. It blended rap with elements of soul, gospel, and experimental music. The lyrics explored topics like education, racism, religion, and personal experiences, solidifying it as a genre-defining classic.",
    descriptionClass: "tcd_desc",
    cdClass: "tcd_cd",
    tracks: [
      "1. Intro",
      "2. We Don't Care",
      "3. Graduation Day",
      "4. All Falls Down",
      "5. I'll Fly Away",
      "6. Spaceship",
      "7. Jesus Walks",
      "8. Never Let Me Down",
      "9. Get Em High",
      "10. Workout Plan",
      "11. The New Workout Plan",
      "12. Slow Jamz",
      "13. Breathe In Breathe Out",
      "14. School Spirit Skit 1",
      "15. School Spirit",
      "16. School Spirit Skit 2",
      "17. Lil Jimmy Skit",
      "18. Two Words",
      "19. Through The Wire",
      "20. Family Business",
      "21. Last Call"
    ]
  },
  {
    id: 2,
    albumclass: "lr",
    vinylClass: "lr_vinyl",
    vinylSrc: lrVinyl,
    cdSrc: lrCd,
    title: "Late Registration",
    titleClass: "lr_title",
    description: "Late Registration (2005): West's second album continued his musical experimentation, fusing rap with soul, jazz, and classical influences. It featured hits like Gold Digger and addressed a wide range of themes, from relationships to social issues.",
    descriptionClass: "lr_desc",
    cdClass: "lr_cd",
    tracks: [
      "1. Wake Up Mr. West",
      "2. Heard 'Em Say",
      "3. Touch the Sky",
      "4. Gold Digger",
      "5. Skit #1",
      "6. Drive Slow",
      "7. My Way Home",
      "8. Crack Music",
      "9. Roses",
      "10. Bring Me Down",
      "11. Addiction",
      "12. Skit #2",
      "13. Diamonds from Sierra Leone (Remix)",
      "14. We Major",
      "15. Skit #3",
      "16. Hey Mama",
      "17. Celebration",
      "18. Skit #4",
      "19. Gone",
      "20. Diamonds from Sierra Leone",
    ]
  },
  {
    id: 3,
    albumclass: "g",
    vinylClass: "g_vinyl",
    vinylSrc: gVinyl,
    cdSrc: gCd,
    title: "Graduation",
    titleClass: "g_title",
    description: "Graduation (2007): Kanye West's third album introduced a more electronic sound and a brighter outlook on life. The album included chart-topping tracks like Stronger and Good Life and delved into themes of success and personal growth, reflecting the artist's evolution in the industry.",
    descriptionClass: "g_desc",
    cdClass: "g_cd",
    tracks: [
      "1. Good Morning",
      "2. Champion",
      "3. Stronger",
      "4. I Wonder",
      "5. Good Life",
      "6. Can't Tell Me Nothing",
      "7. Barry Bonds",
      "8. Drunk and Hot Girls",
      "9. Flashing Lights",
      "10. Everything I Am",
      "11. The Glory",
      "12. Homecoming",
      "13. Big Brother"
    ]
  },
  {
    id: 4,
    albumclass: "080s",
    vinylClass: "080s_vinyl",
    vinylSrc: _080sVinyl,
    cdSrc: _808sCd,
    title: "808's and Heartbeak",
    titleClass: "080s_title",
    description: "808s & Heartbreak (2008): This album deviates from traditional hip-hop sound, experimenting with auto-tune and expressing emotions, particularly after the tragic loss of West's mother and a breakup. It's an intimate and melancholic journey that marked a new phase in the artist's career.",
    descriptionClass: "080s_desc",
    cdClass: "080s_cd",
    tracks: [
      "1. Say You Will",
      "2. Welcome To Heartbreak",
      "3. Heartless",
      "4. Amazing",
      "5. Love Lockdown",
      "6. Paranoid",
      "7. RoboCop",
      "8. Street Lights",
      "9. Bad News",
      "10. See You In My Nightmares",
      "11. Coldest Winter",
      "12. Pinocchio Story",
    ]
  },
  {
    id: 5,
    albumclass: "mbdtf",
    vinylClass: "mbdtf_vinyl",
    vinylSrc: mbdtfVinyl,
    cdSrc: mbdtfCd,
    title: "My Beautiful Dark Twisted Fantasy",
    titleClass: "mbdtf_title",
    description: "My Beautiful Dark Twisted Fantasy (2010): Considered a masterpiece, this album is known for its complex production, experimental sounds, and lyrics that explore dark and personal themes. It includes tracks like Power and Runaway, which have become genre classics.",
    descriptionClass: "mbdtf_desc",
    cdClass: "mbdtf_cd",
    tracks: [
      "1. Dark Fantasy",
      "2. Goergous",
      "3. POWER",
      "4. All Of The Lights (Interlude)",
      "5. All Of The Lights",
      "6. Monster",
      "7. So Appalled",
      "8. Devil In A New Dress",
      "9. Runaway",
      "10. Hell Of A Life",
      "11. Blame Game",
      "12. Lost In The World",
      "13. Who Will Survive In America",
    ]
  },
  {
    id: 6,
    albumclass: "wtt",
    vinylClass: "wtt_vinyl",
    vinylSrc: wttVinyl,
    cdSrc: wttCd,
    title: "Watch The Throne",
    titleClass: "wtt_title",
    description: "Watch the Throne (2011): A collaborative album by Kanye West and Jay-Z, it exudes luxury and opulence, with lyrics focusing on success, extravagance, and their personal and professional relationships. The album features hit tracks like N****s in Paris and Otis and was praised for its high production values and lyrical content. It represents a unique alliance between two hip-hop legends, making it a standout release in both artists' careers.",
    descriptionClass: "wtt_desc",
    cdClass: "wtt_cd",
    tracks: [
      "1. No Church in the Wild",
      "2. Lift Off",
      "3. N***as in Paris",
      "4. Otis",
      "5. Gotta Have It",
      "6. New Day",
      "7. That's My B****",
      "8. Welcome to the Jungle",
      "9. Who Gon Stop Me",
      "10. Murder to Excellence",
      "11. Made in America",
      "12. Why I Love You",
      "13. Illest Motherf****r Alive",
      "14. H.A.M.",
      "15. Primetime",
      "16. The Joy"
    ]
    
  },
  {
    id: 7,
    albumclass: "yeezus",
    vinylClass: "yeezus_vinyl",
    vinylSrc: yeezusVinyl,
    cdSrc: yeezusCd,
    title: "Yeezus",
    titleClass: "yeezus_title",
    description: "Yeezus (2013): A departure from traditional hip-hop, Yeezus embraces raw sound and controversial lyrics. West experiments with electronic and industrial elements, sparking discussions in the music world.",
    descriptionClass: "yeezus_desc",
    cdClass: "yeezus_cd",
    tracks: [
      "1. On Sight",
      "2. Black Skinhead",
      "3. I Am a God",
      "4. New Slaves",
      "5. Hold My Liquor",
      "6. I'm in It",
      "7. Blood on the Leaves",
      "8. Guilt Trip",
      "9. Send It Up",
      "10. Bound 2"
    ]
    
  },
  {
    id: 8,
    albumclass: "tlop",
    vinylClass: "tlof_vinyl",
    vinylSrc: tlofVinyl,
    cdSrc: tlofCd,
    title: "The Life of Pablo",
    titleClass: "tlop_title",
    description: "The Life of Pablo (2016): Highly complex in terms of production and lyrics, this album is a retrospective journey through Kanye West's personal life, referencing family, media conflicts, and life changes.",
    descriptionClass: "tlop_desc",
    cdClass: "tlop_cd",
    tracks: [
      "1. Ultralight Beam",
      "2. Father Stretch My Hands Pt. 1",
      "3. Pt. 2",
      "4. Famous",
      "5. Feedback",
      "6. Low Lights",
      "7. Highlights",
      "8. Freestyle 4",
      "9. I Love Kanye",
      "10. Waves",
      "11. FML",
      "12. Real Friends",
      "13. Wolves",
      "14. Frank's Track",
      "15. Siiiiiiiiiver Surffffeeeeer Intermission",
      "16. 30 Hours",
      "17. No More Parties In LA",
      "18. Facts (Charlie Heat Version)",
      "19. Fade",
      "20. Saint Pablo",
    ]
  },
  {
    id: 9,
    albumclass: "ye",
    vinylClass: "ye_vinyl",
    vinylSrc: yeVinyl,
    cdSrc: yeCd,
    title: "Ye",
    titleClass: "ye_title",
    description: "Ye (2018): Ye is a short, introspective album that explores West's thoughts, touching on his bipolar disorder diagnosis and reflections on life and fame.",
    descriptionClass: "ye_desc",
    cdClass: "ye_cd",
    tracks: [
      "1. I Thought About Killing You",
      "2. Yikes",
      "3. All Mine",
      "4. Wouldn't Leave",
      "5. No Mistakes",
      "6. Ghost Town",
      "7. Violent Crimes"
    ]
    
  },
  {
    id: 10,
    albumclass: "ksg",
    vinylClass: "ksg_vinyl",
    vinylSrc: ksgVinyl,
    cdSrc: ksgCd,
    title: "Kids See Ghosts",
    titleClass: "ksg_title",
    description: "A collaborative project by Kanye West and Kid Cudi that explores mental health, self-discovery, and personal struggles through a blend of rap, rock, and psychedelic elements. Notable tracks include Reborn and Ghost Town.",
    descriptionClass: "ksg_desc",
    cdClass: "ksg_cd",
    tracks: [
      "1. Feel the Love",
      "2. Fire",
      "3. 4th Dimension",
      "4. Freeee (Ghost Town, Pt. 2)",
      "5. Reborn",
      "6. Kids See Ghosts",
      "7. Cudi Montage",
      "8. Devil's Watchin'"
    ]
    
  },
  {
    id: 11,
    albumclass: "jik",
    vinylClass: "jik_vinyl",
    vinylSrc: jikVinyl,
    cdSrc: jikCd,
    title: "Jesus is King",
    titleClass: "jik_title",
    description: "With a strong religious theme, this album reflects Kanye West's conversion and commitment to Christian beliefs. The sound is minimalistic and gospel-inspired.",
    descriptionClass: "jik_desc",
    cdClass: "jik_cd",
    tracks: [
      "1. Every Hour",
      "2. Selah",
      "3. Follow God",
      "4. Closed on Sunday",
      "5. On God",
      "6. Everything We Need",
      "7. Water",
      "8. God Is",
      "9. Hands On",
      "10. Use This Gospel",
      "11. Jesus Is Lord"
    ]
    
  },
  {
    id: 12,
    albumclass: "donda",
    vinylClass: "donda_vinyl",
    vinylSrc: dondaVinyl,
    cdSrc: dondaCd,
    title: "DONDA",
    titleClass: "donda_title",
    description: "Named after West's late mother, Donda explores themes of family, grief, and personal struggles. The album features a mix of gospel, hip-hop, and experimental sounds, showcasing West's evolving style.",
    descriptionClass: "donda_desc",
    cdClass: "donda_cd",
    tracks: [
      "1. Donda Chant",
      "2. Jail",
      "3. God Breathed",
      "4. Off the Grid",
      "5. Hurricane",
      "6. Praise God",
      "7. Jonah",
      "8. Ok Ok",
      "9. Junya",
      "10. Believe What I Say",
      "11. 24",
      "12. Remote Control",
      "13. Moon",
      "14. Heaven and Hell",
      "15. Donda",
      "16. Keep My Spirit Alive",
      "17. Jesus Lord",
      "18. New Again",
      "19. Tell the Vision",
      "20. Donda Chant Pt. 2",
      "21. Up from the Ashes",
      "22. Donda Chant Pt. 3",
      "23. Pure Souls",
      "24. Come to Life",
      "25. No Child Left Behind"
    ]
    
  },
];

console.log(albums);


export default albums;
