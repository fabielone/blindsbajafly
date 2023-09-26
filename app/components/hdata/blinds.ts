interface Color {
    name: string;
  }
  
  interface Fabric {
    name: string;
    colors: Color[];
    mh: number;
    mw: number;
    sqmprice: number;
  }
  
  interface Blind {
    name: string;
    fabrics: Fabric[];
  }
  
  interface Provider {
    name: string;
    blinds: Blind[];
  }
  
  export const providers: Provider[] = [
    {
      name: "OZUNA",
      blinds: [
        {
          name: "Sheer Elegance",
          fabrics: [
            {
              name: "DUO BASIC",
              //Perla , Cream, Capuccino, Coffee, Purple, Provincial Blue , Lino Ivory, Grey, Dark Grey, Chocolate, Black
              //BLACK, CHOCOLATE, DARK GREY, GREY, LINO IVORY, PROVINCIAL BLUE, PURPLE, COFFEE, CAPUCCINO, CREAM, PERLA,
              colors: [{ name: "PERLA" }, { name: "Cream" }, { name: "Capuccino" }, { name: "Coffee" }, { name: "Purple" }, { name: "Provincial Blue" }, { name: "Lino Ivory" }, { name: "Grey" }, { name: "Dark Grey" }, { name: "Chocolate" }, { name: "Black" }],
                mh:2.5,
                mw:2.5,
                sqmprice: 0.5

            },
            {
                name: "DUO VIEWTY",
                //BLACK, DARK GREY, LIGHT GREY, MOCHA, DEEP CARAMEL, M TAUPE, LIGHT TAUPE, DEEP BLUE, WINE, RED, ORANGE, PINK, YELLOW, OYSTER, WHITE,
                colors: [{ name: "WHITE" }, { name: "OYSTER" }, { name: "YELLOW" }, { name: "PINK" }, { name: "ORANGE" }, { name: "RED" }, { name: "WINE" }, { name: "DEEP BLUE" }, { name: "LIGHT TAUPE" }, { name: "M TAUPE" }, { name: "DEEP CARAMEL" }, { name: "MOCHA" }, { name: "LIGHT GREY" }, { name: "DARK GREY" }, { name: "BLACK" }],
                mh:2.8,
                mw:2.8,
                sqmprice: 0.5
            },
            {
                name: "DUO WOODLINE",
                //OXFORD, BLACK WOOD, OLD WOOD, KAKHY, GREY WOOD, NATURAL WOOD, SOFT WHITE, WHITE WOOD,
                colors: [{ name: "WHITE WOOD" }, { name: "SOFT WHITE" }, { name: "NATURAL WOOD" }, { name: "GREY WOOD" }, { name: "KAKHY" }, { name: "OLD WOOD" }, { name: "BLACK WOOD" }, { name: "OXFORD" }],
                mh:2.6,
                mw:3,
                sqmprice: 0.5
            },
            {
                name: "DESNSE WOODLOOK",
                //OXFORD, BLACK WOOD, OLD WOOD, KAKHY, GREY WOOD, NATURAL WOOD, SOFT WHITE, WHITE WOOD, 
                colors: [{ name: "WHITE WOOD" }, { name: "SOFT WHITE" }, { name: "NATURAL WOOD" }, { name: "GREY WOOD" }, { name: "KAKHY" }, { name: "OLD WOOD" }, { name: "BLACK WOOD" }, { name: "OXFORD" }],
                mh:2.8,
                mw:2.8,
                sqmprice: 0.5
            },
            {
                name: "DUO CELEBRITY",
                //SMOKY, BONE SMOKY, MARFIL, PALE, 
                colors: [{ name: "PALE" }, { name: "MARFIL" }, { name: "BONE SMOKY" }, { name: "SMOKY" }],
                mh:2.5,
                mw:2.5,
                sqmprice: 0.5
            },
            {
                name: "GRUPO 2",
                //BLACK, BROWN, COFFE BROWN, KAKHY,  LIGHT GREY, NATURAL, WHITE, 
                colors: [{ name: "WHITE" }, { name: "NATURAL" }, { name: "LIGHT GREY" }, { name: "KAKHY" }, { name: "COFFE BROWN" }, { name: "BROWN" }, { name: "BLACK" }],
                mh:2.85,
                mw:2.85,
                sqmprice: 0.5
            },
            {
                name: "DUO TERRA",
                //MOKA, CASTAÑA, STEEL, AVELLANA, VANILLA, 
                colors: [{ name: "VANILLA" }, { name: "AVELLANA" }, { name: "STEEL" }, { name: "CASTAÑA" }, { name: "MOKA" }],
                mh:3,
                mw:3,
                sqmprice: 0.5
            },
            {
                name: "DUO DIMOUT",
                //BLACK, OXFORD, COFFE BROWN, BROWN, KAKHY, LIGHT GRAY, GOLDEN SAND, NATURAL, WHITE, 
                colors: [{ name: "WHITE" }, { name: "NATURAL" }, { name: "GOLDEN SAND" }, { name: "LIGHT GRAY" }, { name: "KAKHY" }, { name: "BROWN" }, { name: "COFFE BROWN" }, { name: "OXFORD" }, { name: "BLACK" }],
                mh:3, 
                mw:3,
                sqmprice: 0.5
            },
            {
                name: "BRAVE DIM OUT",
                //STEEL, BROWN, NAVY, GRAY, SILVER, 
                colors: [{ name: "SILVER" }, { name: "GRAY" }, { name: "NAVY" }, { name: "BROWN" }, { name: "STEEL" }],
                mh:2.8,
                mw:2.8,
                sqmprice: 0.5
              },
              {
                  name: "LINO DIMOUT",
                  // GREY, IVORY, WHITE, 
                  colors: [{ name: "WHITE" }, { name: "IVORY" }, { name: "GREY" }],
                  mh:2.8,
                    mw:2.8,
                    sqmprice: 0.5
              },
              
            // Other fabrics
          ],
        },
        {
            name: "Roller",
            fabrics: [
                {
                    name: "SCREEN SOFT",
                    //BLACK, CHARCOAL GREY, CHOCOLATE, BONE, WHITE PLATINUM, WHITE BONE, WHITE, 
                    colors: [{ name: "WHITE" }, { name: "WHITE BONE" }, { name: "WHITE PLATINUM" }, { name: "BONE" }, { name: "CHOCOLATE" }, { name: "CHARCOAL GREY" }, { name: "BLACK" }],
                    mh:2,
                      mw:3,
                      sqmprice: 0.5
                },
                {
                    name: "SCREEN BASIC",
                    //ASH, EBONY, TABACCO, PEWTER, PEBBLESTONE, GRANITE, ALABASTER, CHALK,                  
                    colors: [{ name: "CHALK" }, { name: "ALABASTER" }, { name: "GRANITE" }, { name: "PEBBLESTONE" }, { name: "PEWTER" }, { name: "TABACCO" }, { name: "EBONY" }, { name: "ASH" }],
                    mh:2,
                      mw:3,
                      sqmprice: 0.5
                },
                {
                    name: "BO LONGBEACH",
                    //NEGRO, BURGUNDY, OCEAN BLUE, MANDARIN, SILVER, GRIS, COFFE, STONE, SAMBA, IVORY, BLANCO, 
                    colors: [{ name: "BLANCO" }, { name: "IVORY"}, { name: "SAMBA"}, { name: "STONE"}, { name: "COFFE" }, 
                    { name: "GRIS"}, { name: "SILVER"}, { name: "MANDARIN"}, { name: "OCEAN BLUE"}, { name: "BURGUNDY"}, { name: "NEGRO"}],
                    mh:2.5,
                      mw:2.5,
                      sqmprice: 0.5,
                },
                {
                    name: "BO SYDNEY",
                    //GRIS, LIGHT GREY, IVORY, BLANCO
                    colors: [{ name: "BLANCO" }, { name: "IVORY"}, { name:"LIGHT GREY"}, { name:"GRIS"}],
                    mh:3,
                      mw:3,
                      sqmprice: 0.5,
                },
                {
                    name: "BO MONTREAL",
                    //STEEL, GREY , ALABASTER, IVORY, CHALK, 
                    colors: [{ name: "CHALK" }, { name: "IVORY" }, { name: "ALABASTER" },{ name: "GREY" }, { name: "STEEL" }],
                    mh:2,
                    mw:2.5,
                    sqmprice: 0.5,              
              },
                {
                    name: "BO TEXTURE",
                    //WHITE
                    colors: [{ name: "WHITE" },],
                    mh:2.6,
                      mw:2.6,
                      sqmprice: 0.5,
                },
                {
                    name: "BO OHIO",
                    //STEEL, STONE, SAMBA, WHITE 
                    colors: [{ name: "WHITE" }, { name: "SAMBA" }, { name: "STONE" }, { name: "STEEL" }],
                    mh:3,
                    mw:3,
                    sqmprice: 0.5,
                },
                {
                    name: "BO LUXUXY",
                    //DARK GREY, STONE , SAMBA, BEIGE, WHITE, 
                    colors: [{ name: "WHITE" }, { name: "BEIGE" }, { name: "SAMBA" }, { name: "STONE" }, { name: "DARK GREY" }],
                    mh:3,
                      mw:3,
                      sqmprice: 0.5,
                },
                    // Other fabrics
                ],
        }
        // Other blinds
      ],
    },
    {
      name: "QUALITY",
      blinds: [
        {
          name: "Blind B",
          fabrics: [
            
            // Other fabrics
          ],
        },
        // Other blinds
      ],
    },
  ];


  //price props 
  // width , height , fabric , provider , type 
  interface PriceCalculationProps {
    width: number;
    height: number;
    sqmprice: number;
  }
  // export a function that return a price base on the props
  
  export const priceCalculation = (props: PriceCalculationProps) => {
    const { width, height, sqmprice } = props;
    return width*height<1?sqmprice:width*height*sqmprice;
  }
