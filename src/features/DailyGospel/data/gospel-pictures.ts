import type { GospelType } from "../types/gospel.type";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

export const gospelPictures: Record<GospelType, string> = {
  evangelio: "evangelio_iv64l6",
  salmoResponsorial: "salmos_y45gi1",
  primeraLectura: "1_lectura_t88vxr",
  segundaLectura: "1_lectura_ptm55f",
};

export const gospelTitle: Record<GospelType, string> = {
  evangelio: "Evangelio",
  salmoResponsorial: "Salmo",
  primeraLectura: "Primera Lectura",
  segundaLectura: "Segunda Lectura",
};

export const resizeAction = {
  salmoResponsorial: thumbnail()
    .width(320)
    .height(400)
    .gravity(focusOn(FocusOn.faces()))
    .zoom(0.4),
  segundaLectura: thumbnail()
    .width(320)
    .height(400)
    .gravity(focusOn(FocusOn.faces()))
    .zoom(0.4),
  primeraLectura: thumbnail()
    .width(320)
    .height(400)
    .gravity(focusOn(FocusOn.faces()))
    .zoom(0.4),
  evangelio: thumbnail()
    .width(320)
    .height(320)
    .gravity(focusOn(FocusOn.faces()))
    .zoom(0.2),
};
