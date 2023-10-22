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
    description: "Jego pierwszy album",
    descriptionClass: "tcd_desc",
  },
  {
    id: 2,
    albumclass: "lr",
    vinylClass: "lr_vinyl",
    vinylSrc: lrVinyl,
    cdSrc: lrCd,
    title: "Late Registration",
    titleClass: "lr_title",
    description: "Jego drugi album",
    descriptionClass: "lr_desc",
  },
  {
    id: 3,
    albumclass: "g",
    vinylClass: "g_vinyl",
    vinylSrc: gVinyl,
    cdSrc: gCd,
    title: "Graduation",
    titleClass: "g_title",
    description: "Jego trzeci album",
    descriptionClass: "g_desc",
  },
  {
    id: 4,
    albumclass: "080s",
    vinylClass: "080s_vinyl",
    vinylSrc: _080sVinyl,
    cdSrc: _808sCd,
    title: "808's and Heartbeak",
    titleClass: "080s_title",
    description: "Jego czwarty album",
    descriptionClass: "080s_desc",
  },
  {
    id: 5,
    albumclass: "mbdtf",
    vinylClass: "mbdtf_vinyl",
    vinylSrc: mbdtfVinyl,
    cdSrc: mbdtfCd,
    title: "My Beautiful Dark Twisted Fantasy",
    titleClass: "mbdtf_title",
    description: "Jego piąty album",
    descriptionClass: "mbdtf_desc",
  },
  {
    id: 6,
    albumclass: "wtt",
    vinylClass: "wtt_vinyl",
    vinylSrc: wttVinyl,
    cdSrc: wttCd,
    title: "Watch The Throne",
    titleClass: "wtt_title",
    description: "Album wspólny z Jay-Z",
    descriptionClass: "wtt_desc",
  },
  {
    id: 7,
    albumclass: "yeezus",
    vinylClass: "yeezus_vinyl",
    vinylSrc: yeezusVinyl,
    cdSrc: yeezusCd,
    title: "Yeezus",
    titleClass: "yeezus_title",
    description: "Jego siódmy album",
    descriptionClass: "yeezus_desc",
  },
  {
    id: 8,
    albumclass: "tlop",
    vinylClass: "tlof_vinyl",
    vinylSrc: tlofVinyl,
    cdSrc: tlofCd,
    title: "The Life of Pablo",
    titleClass: "tlop_title",
    description: "Jego ósmy album",
    descriptionClass: "tlop_desc",
  },
  {
    id: 9,
    albumclass: "ye",
    vinylClass: "ye_vinyl",
    vinylSrc: yeVinyl,
    cdSrc: yeCd,
    title: "Ye",
    titleClass: "ye_title",
    description: "Jego dziewiąty album",
    descriptionClass: "ye_desc",
  },
  {
    id: 10,
    albumclass: "ksg",
    vinylClass: "ksg_vinyl",
    vinylSrc: ksgVinyl,
    cdSrc: ksgCd,
    title: "Kids See Ghosts",
    titleClass: "ksg_title",
    description: "Album wspólny z Kid Cudi",
    descriptionClass: "ksg_desc",
  },
  {
    id: 11,
    albumclass: "jik",
    vinylClass: "jik_vinyl",
    vinylSrc: jikVinyl,
    cdSrc: jikCd,
    title: "Jesus is King",
    titleClass: "jik_title",
    description: "Jego jedenasty album",
    descriptionClass: "jik_desc",
  },
  {
    id: 12,
    albumclass: "donda",
    vinylClass: "donda_vinyl",
    vinylSrc: dondaVinyl,
    cdSrc: dondaCd,
    title: "DONDA",
    titleClass: "donda_title",
    description: "Jego dwunasty album",
    descriptionClass: "donda_desc",
  },
];

export default albums;
