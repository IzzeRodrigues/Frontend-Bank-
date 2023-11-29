var dia:string = "noite";

interface IDateDropdown {
    onDateChange: (date: string) => void;
    defaultDate?: "DD-MM-YYYY";
  
    containerClass?: string;
    optionClass?: string;
    selectClass?: string;
  
    selectPlaceholder?: {
      day: string;
      year: string;
      month: string;
      
    };
      yearStart?: number;
      yearEnd?: number;
  }
