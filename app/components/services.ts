export interface ServiceCategory {
    id:string;
    label: string;
    href: string;
  }
  
  export interface CoreService {
    id:string;
    label: string;
    categories: ServiceCategory[];
  }
  
  export const servicesData: CoreService[] = [
    {
      id:"comercial",
      label: "Comercial",
      categories: [
        {
          id:"presupuesto",
          label: "Presupuesto",
          href: "/services/web-development/frontend",
        },
        {
          id:"instalacion",
          label: "Instalacion",
          href: "/services/web-development/backend",
        },
         {
          id:"reparacion",
          label: "Reparacion",
          href: "/services/web-development/backend",
        },
      ],
    },
    {
     
      id:"residencial",
      label: "Residencial",
      categories: [
        {
          id:"presupuesto",
          label: "Presupuesto",
          href: "/services/web-development/frontend",
        },
        {
          id:"instalacion",
          label: "Instalacion",
          href: "/services/web-development/backend",
        },
         {
          id:"reparacion",
          label: "Reparacion",
          href: "/services/web-development/backend",
        },
      ],
    },
    {
      id:"blog",
      label: "Blog",
      categories: [
        {
          id:"manetinimiento",
          label: "Mantenimiento de Persianas",
          href: "/services/content-creation/copywriting",
        },
        {
          id:"limpieza",
          label: "Limpieza de Persianas",
          href: "/services/content-creation/graphic-design",
        },
        {
          id:"masarticulos",
          label: "Mas Articulos",
          href: "/services/content-creation/graphic-design",
        },
      ],
    },
    {
      id:"promociones",
      label: "promociones",
      categories: [
        {
          id:"siguenosredes",
          label: "Siguenos y Subscribete por un 15%",
          href: "/services/content-creation/copywriting",
        },
        
      ],
    },
  ];