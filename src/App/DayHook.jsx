const week = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const year = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const DayHook = () => {
  const day = new Date();
  let today =
    week[day.getDay()] + ", " + day.getDate() + " de " + year[day.getMonth()];

  return { today };
};

export default DayHook;
