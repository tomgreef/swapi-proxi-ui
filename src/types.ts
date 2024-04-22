export type Person = {
  name: string;
  birthYear: string;
  gender: string;
  planetName: string;
  fastestVehicleDriven: string;
  films: Film[];
};
type Film = {
  name: string;
  releaseDate: string;
};
