import React from 'react';
import NavMenuItem from '../navigation/NavMenuItem';
import GiftUniverseMenu from './GiftUniverseMenu';
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import SubMenuSection from '../navigation/SubMenuSection';

const MainNavbarMenus = () => {
  return (
    <NavigationMenuList className="flex flex-col lg:flex-row lg:gap-4 gap-4 items-center">
      <NavMenuItem title="Le monde Fiori" image="/Articles/1.png">
        <div className="grid grid-cols-2 gap-3">
          <SubMenuSection
            title="Notre monde"
            items={[
              {
                href: "/category/Histoirefiori",
                title: "Histoire",
                description: "Collections élégantes pour mariage"
              },
              {
                href: "/category/collectionfiori",
                title: "collection",
                description: "Design festifs"
              },
              {
                href: "/category/dna",
                title: "DNA",
                description: "Design festifs"
              }
            ]}
          />
        </div>
      </NavMenuItem>

      <NavMenuItem title="L'univers Cadeaux" image="/Articles/2.png">
        <GiftUniverseMenu />
      </NavMenuItem>

      <NavMenuItem title="Le prêt à porter" image="/Articles/3.png">
        <div className="grid grid-cols-2 gap-3">
          <SubMenuSection
            title="Homme"
            items={[
              {
                href: "/category/pret-a-porter-ostumes",
                title: "Costumes",
                description: "Costumes élégants"
              },
              {
                href: "/category/pret-a-porter-blazers",
                title: "Blazers",
                description: "Blazers raffinés"
              },
              {
                href: "/category/pret-a-porter-Chemises",
                title: "Chemises",
                description: "Chemises classiques"
              },
              {
                href: "/category/pret-a-porter-pantalons",
                title: "pantalons",
                description: "Pulls confortables"
              },
              {
                href: "/category/pret-a-porter-pantalons",
                title: "Pantalons",
                description: "Pantalons élégants"
              },
              {
                href: "/category/pret-a-porter-pollo",
                title: "pollo",
                description: "Pantalons élégants"
              }
            ]}
          />
          <SubMenuSection
            title="Femme"
            items={[
              {
                href: "/category/pret-a-porter",
                title: "Chemises",
                description: "Chemises féminines"
              },
              {
                href: "/category/pret-a-porter",
                title: "Robes",
                description: "Robes élégantes"
              },
              {
                href: "/category/pret-a-porter",
                title: "Vestes/Manteaux",
                description: "Vestes et manteaux"
              }
            ]}
          />
        </div>
      </NavMenuItem>

      <NavMenuItem title="Accessoires" image="/Articles/4.png">
        <div className="grid grid-cols-2 gap-3">
          <SubMenuSection
            title="Homme"
            items={[
              {
                href: "/category/accessoires-portefeuilles",
                title: "Portefeuilles",
                description: "Portefeuilles élégants"
              },
              {
                href: "/category/accessoires-ceintures",
                title: "Ceintures",
                description: "Ceintures raffinées"
              },
              {
                href: "/category/accessoires-cravates",
                title: "Cravates",
                description: "Cravates élégantes"
              },
              {
                href: "/category/accessoires-allettes",
                title: "Mallettes",
                description: "Mallettes professionnelles"
              },
              {
                href: "/category/accessoires-portecartes",
                title: "Porte-cartes",
                description: "Porte-cartes élégants"
              },
              {
                href: "/category/accessoires-portescle",
                title: "Porte-clés",
                description: "Porte-clés raffinés"
              },
              {
                href: "/category/accessoires-portecheque",
                title: "Porte-chèques",
                description: "Porte-chèques élégants"
              },
              {
                href: "/category/accessoires-passeports",
                title: "Porte-passeports",
                description: "Porte-passeports raffinés"
              }
            ]}
          />
          <SubMenuSection
            title="Femme"
            items={[
              {
                href: "/category/accessoires-sacamainfemme",
                title: "Sacs à main",
                description: "Sacs à main élégants"
              }
            ]}
          />
        </div>
      </NavMenuItem>

      <NavMenuItem title="Le sur mesure" image="/Articles/4.png">
        <div className="grid grid-cols-2 gap-3">
          <SubMenuSection
            title="Homme"
            items={[
              {
                href: "/category/sur-mesure",
                title: "Portefeuilles",
                description: "Portefeuilles élégants"
              },
              {
                href: "/category/sur-mesure",
                title: "Ceintures",
                description: "Ceintures raffinées"
              },
              {
                href: "/category/sur-mesure",
                title: "Cravates",
                description: "Cravates élégantes"
              },
              {
                href: "/category/sur-mesure",
                title: "Mallettes",
                description: "Mallettes professionnelles"
              }
            ]}
          />
          <SubMenuSection
            title="Femme"
            items={[
              {
                href: "/category/sur-mesure",
                title: "Sacs à main",
                description: "Sacs à main élégants"
              },
              {
                href: "/category/sur-mesure",
                title: "Sacs",
                description: "Collection de sacs"
              }
            ]}
          />
        </div>
      </NavMenuItem>

      <NavMenuItem title="Outlet" image="/NewCollection/Together We Feast.png">
        <div className="grid grid-cols-2 gap-3">
          <SubMenuSection
            title="Homme"
            items={[
              {
                href: "/category/outlet-costumes",
                title: "Costumes",
                description: "Costumes en promotion"
              },
              {
                href: "/category/outlet-blazers",
                title: "Blazers",
                description: "Blazers en solde"
              },
              {
                href: "/category/outlet-chemises",
                title: "chemises",
                description: "Chemises en promotion"
              },
              {
                href: "/category/outlet-pulls",
                title: "Pulls",
                description: "Pulls en solde"
              },
              {
                href: "/category/outlet-pantalons",
                title: "Pantalons",
                description: "Pantalons en promotion"
              }
            ]}
          />
          <SubMenuSection
            title="Femme"
            items={[
              {
                href: "/category/outlet-chemises",
                title: "Chemises",
                description: "Chemises en promotion"
              },
              {
                href: "/category/outlet-robes",
                title: "Robes",
                description: "Robes en solde"
              },
              {
                href: "/category/outlet-manteux",
                title: "Vestes/Manteaux",
                description: "Vestes et manteaux en promotion"
              }
            ]}
          />
        </div>
      </NavMenuItem>
    </NavigationMenuList>
  );
};

export default MainNavbarMenus;
