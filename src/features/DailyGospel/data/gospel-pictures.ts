import type { GospelType } from "../types/gospel.type";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

export const gospelPictures: Record<GospelType, string> = {
  evangelio: "evangelio_iv64l6",
  salmoResponsorial: "salmos_y45gi1",
  primeraLectura: "1_lectura_zzlfyp",
};

export const gospelTitle: Record<GospelType, string> = {
  evangelio: "Evangelio",
  salmoResponsorial: "Salmo",
  primeraLectura: "Primera Lectura",
};

export const resizeAction = {
  salmoResponsorial: thumbnail()
    .width(640)
    .height(750)
    .gravity(focusOn(FocusOn.faces()))
    .zoom(0.4),
  primeraLectura: thumbnail()
    .width(640)
    .height(750)
    .gravity(focusOn(FocusOn.faces()))
    .zoom(0.4),
  evangelio: thumbnail()
    .width(750)
    .height(750)
    .gravity(focusOn(FocusOn.faces()))
    .zoom(0.2),
};
