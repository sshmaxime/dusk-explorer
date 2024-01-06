export type withChildren = {
  children: React.ReactNode;
};

export type Banner = {
  message: string;
};

export type PageMetadata = {
  name: string;
  description: string;

  //
  href: string;

  menuButton?: {
    image?: string;

    content: {
      self?: boolean;
      items: PageMetadata[];
    };
  };
};
