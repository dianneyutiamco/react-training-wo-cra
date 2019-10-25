// TODO : maybe we no longer need a model for this

export interface ValidationTagInterface {
  id: number;
  label: string;
}

export class ValidationTagModel implements ValidationTagInterface{
  id: number;
  label: string;

  constructor(data?: any) {
    this.id = data.id;
    this.label = data.label;
  }

}