/** @jsxImportSource theme-ui */
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Box, Button, Flex, Grid, Heading, Text, Link as ThemeLink } from "theme-ui";
import NextLink from "next/link";

const navLinks = [
  { href: "https://hackclub.com/clubs/", label: "Clubs" },
  { href: "https://workshops.hackclub.com/", label: "Workshops" },
  { href: "https://hackclub.com/hackathons/", label: "Hackathons" },
  { href: "https://hackclub.com/philosophy/", label: "Philosophy" },
];

function HackClubTypeAnimation({ onDone }) {
  const [typed, setTyped] = useState("");
  const text = "Hack Club";
  const idx = useRef(0);

  useEffect(() => {
    setTyped("");
    idx.current = 0;
    const typeIt = () => {
      if (idx.current < text.length) {
        setTyped((prev) => prev + text[idx.current]);
        idx.current += 1;
        setTimeout(typeIt, 120);
      } else {
        setTimeout(onDone, 1800);
      }
    };
    typeIt();
    // eslint-disable-next-line
  }, []);
  return (
    <pre
      sx={{
        fontSize: 4,
        color: "primary",
        textAlign: "center",
        opacity: typed.length === text.length ? 0 : 1,
        transition: "opacity 1s"
      }}
      aria-label="Hack Club type animation"
    >
      {typed}
    </pre>
  );
}

export default function HomePage() {
  const [showHero, setShowHero] = useState(true);
  return (
    <>
      <Head>
        <title>Hack Club - A Home For High School Hackers</title>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hack Club" />
        <meta name="twitter:site" content="@hackclub" />
        <meta property="og:title" content="Hack Club - A Home For High School Hackers" />
        <meta name="description" content="Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world." />
        <meta property="og:description" content="Hack Club is a global nonprofit network of high school makers & student-led coding clubs where young people build the agency, the network, & the technical talent to think big & do big things in the world." />
        <meta name="theme-color" content="#ec3750" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://assets.hackclub.com/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://assets.hackclub.com/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://assets.hackclub.com/favicons/favicon-16x16.png" />
        <link rel="manifest" href="https://assets.hackclub.com/favicons/site.webmanifest" />
        <meta property="og:logo" content="https://assets.hackclub.com/icon-rounded.png" size="512x512" />
      </Head>
      <Box as="nav" sx={{
        bg: "background",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}>
        <Flex
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: 3,
            height: 70,
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <ThemeLink as={NextLink} href="/" sx={{ display: "flex", alignItems: "center" }}>
            <img src="https://assets.hackclub.com/icon-rounded.png" alt="Hack Club Logo" style={{ height: 40 }} />
          </ThemeLink>
          <Flex as="ul" sx={{ gap: 4, listStyle: "none", alignItems: "center", m: 0, p: 0 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <ThemeLink href={link.href} sx={{
                  textDecoration: "none",
                  color: "text",
                  fontWeight: 500,
                  "&:hover": { color: "primary" }
                }}>
                  {link.label}
                </ThemeLink>
              </li>
            ))}
            <li>
              <ThemeLink
                href="https://hackclub.com/slack"
                sx={{
                  bg: "primary",
                  color: "background",
                  px: 3,
                  py: 2,
                  borderRadius: 999,
                  fontWeight: "bold",
                  ml: 2,
                  textDecoration: "none"
                }}>
                Join Slack
              </ThemeLink>
            </li>
          </Flex>
        </Flex>
      </Box>

      {/* Animation Box */}
      {!showHero && (
        <Box
          sx={{
            pt: 6,
            pb: 6,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "60vh",
          }}
        >
          <HackClubTypeAnimation onDone={() => setShowHero(true)} />
        </Box>
      )}

      {/* Hero Section */}
      {showHero && (
        <>
          <header
            className="hero"
            sx={{
              pt: [5, 6],
              pb: [4, 5],
              bg: "linear-gradient(135deg, #ec3750 0%, #ff8c37 100%)",
              color: "background",
              textAlign: "center",
              mt: 70
            }}
          >
            <Box sx={{ maxWidth: 800, mx: "auto" }}>
              <Heading as="h1" sx={{ fontSize: [4, 6], mb: 3, lineHeight: 1.2 }}>
                Welcome to the world of teenage hackers
              </Heading>
              <Text as="p" sx={{ fontSize: [2, 3], opacity: 0.9, mb: 4 }}>
                Join a worldwide community of high school makers, creators, and developers
              </Text>
              <Flex sx={{ gap: 3, justifyContent: "center" }}>
                <Button as="a" href="https://hackclub.com/slack" sx={{
                  bg: "background",
                  color: "primary"
                }}>
                  Join the Slack
                </Button>
                <Button as="a" href="https://apply.hackclub.com/" variant="outline" sx={{
                  borderColor: "background",
                  color: "background"
                }}>
                  Start a Club
                </Button>
              </Flex>
            </Box>
          </header>

          {/* About Section */}
          <Box as="section" id="about" sx={{ py: [4, 5], bg: "muted" }}>
            <Box sx={{ maxWidth: 900, mx: "auto" }}>
              <Heading as="h2" sx={{ textAlign: "center", fontSize: [3, 4], mb: 4 }}>
                For teenagers, by teenagers
              </Heading>
              <Grid columns={[1, 2, 3]} gap={4} className="features-grid">
                <Box sx={{
                  bg: "background",
                  p: 4,
                  borderRadius: 6,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.04)"
                }}>
                  <Heading as="h3" sx={{ fontSize: 2 }}>Start a Club</Heading>
                  <Text>Build a coding club at your high school with support from the Hack Club community.</Text>
                </Box>
                <Box sx={{
                  bg: "background",
                  p: 4,
                  borderRadius: 6,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.04)"
                }}>
                  <Heading as="h3" sx={{ fontSize: 2 }}>Global Community</Heading>
                  <Text>Join thousands of students worldwide in making, learning, and building together.</Text>
                </Box>
                <Box sx={{
                  bg: "background",
                  p: 4,
                  borderRadius: 6,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.04)"
                }}>
                  <Heading as="h3" sx={{ fontSize: 2 }}>Resources & Workshops</Heading>
                  <Text>Access creative workshops, events, and resources to level up your skills.</Text>
                </Box>
              </Grid>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
