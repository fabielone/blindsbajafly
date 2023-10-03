import { cssBundleHref } from "@remix-run/css-bundle";
import type {
  LinksFunction,
  LoaderArgs,
  V2_MetaFunction,
} from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import globalsheet from "./styles/global.css"

// root.tsx
import React, { useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";

import { ServerStyleContext, ClientStyleContext } from "./context";
import NavBar from "./components/NavBar";
import WithSubnavigation from "./components/FooterNav";
import styles from "./styles/hscroller.css";
import FacebookChat from "./components/FacebookChat";
import { PopupWidget } from "react-calendly";


export const meta: V2_MetaFunction = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
  },
  {
    rel: "stylesheet",
    href: styles,
  },
  {
    rel: "stylesheet",
    href: globalsheet,
  },
];

const theme = extendTheme({ 
  components: {
    
  },
});

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en" className="h-full">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
        </body>
      </html>
    );
  }
);

export default function App() {

  const rootRef = React.useRef<HTMLElement | null>(null);

useEffect(() => {
  rootRef.current = document.getElementById("root");
}, []);

  return (
    <Document 
    >
      <ChakraProvider theme={theme}>
      <NavBar />
      <Box  id="root" pt={'160px'} minH={'100vh'} mx={['5%','5%','10%','15%','15%']}>
          <Outlet />
        </Box>
      < WithSubnavigation />
      </ChakraProvider>
     
 
      <PopupWidget
        url="https://calendly.com/blindsbaja/presupuesto"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={rootRef.current!}
        text="Agendar Presupuesto!"
        textColor="#ffffff"
        color="#00a2ff"
      />
      <FacebookChat />
    </Document>
  );
}
