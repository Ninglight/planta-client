declare namespace ListPlantModuleCssNamespace {
  export interface IListPlantModuleCss {
    list: string;
  }
}

declare const ListPlantModuleCssModule: ListPlantModuleCssNamespace.IListPlantModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ListPlantModuleCssNamespace.IListPlantModuleCss;
};

export = ListPlantModuleCssModule;
