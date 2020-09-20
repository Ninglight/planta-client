declare namespace CardPlantModuleCssNamespace {
  export interface ICardPlantModuleCss {
    background: string;
    container: string;
    content: string;
    indicator: string;
    line: string;
    location: string;
    overlay: string;
    thirst: string;
    title: string;
  }
}

declare const CardPlantModuleCssModule: CardPlantModuleCssNamespace.ICardPlantModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CardPlantModuleCssNamespace.ICardPlantModuleCss;
};

export = CardPlantModuleCssModule;
