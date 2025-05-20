
export interface PhoneData {
  number: string;
  formattedNumber: string;
}

export interface ContactData {
  phones: PhoneData[];
  email: string;
  address: string;
  workingHours: string;
}

export interface NavigationItem {
  title: string;
  href: string;
}

export interface CopyrightData {
  year: number;
  companyName: string;
  documents: {
    title: string;
    href: string;
  }[];
}
