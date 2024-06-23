//definindo os tipos e garantindo uma tipagem do projeto, evitando possíveis erros

export interface Series {
    id: number;
    name: string;
    image: string;
}

export interface SeriesData {
    choices: Series[];
    name: String;
  }