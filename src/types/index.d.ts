
export interface INavigation {
    navigate: (route: any, option?: any) => void;
    push: (route: string, option?: any) => void;
    replace: (route: string, option?: any) => void;
    goBack: () => void;
    pop: () => void;
    setOptions: (options: any) => void; // Add setOptions method
    // addListener: (event: string, callback: () => void) => void; 
    addListener: (event: string, callback: (e: EventArg) => void) => { remove: () => void };
    dispatch: (action: any) => void;
}


export interface IComponent {
    navigation: INavigation;
    route?: any;
}
