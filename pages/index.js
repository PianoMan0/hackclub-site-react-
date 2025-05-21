/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef } from "react";
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
    let isMounted = true;
    function typeIt() {
      if (!isMounted) return;
      if (idx.current < text.length) {
        setTyped((prev) => prev + text[idx.current]);
        idx.current += 1;
        setTimeout(typeIt, 120);
      } else {
        setTimeout(() => {
          if (isMounted) onDone();
        }, 900);
      }
    }
    typeIt();
    return () => { isMounted = false; };
  }, [onDone]);

  return (
    <Heading
      as="h1"
      sx={{
        fontSize: [5, 7, 8],
        mb: [3, 4],
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "primary", // <<< Make it visible!
        minHeight: "1.3em",
        transition: "color 0.2s"
      }}
    >
      {typed}
    </Heading>
  );
}

export default function HomePage() {
  const [showHero, setShowHero] = useState(false);

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

      {/* Navbar */}
      <Box as="nav" sx={{
        bg: "background",
        boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}>
        <Flex
          sx={{
            maxWidth: 1200,
            mx: "auto",
            px: 3,
            height: 80,
            alignItems: "center",
            justifyContent: "space-between"
          }}>
          <ThemeLink as={NextLink} href="/" sx={{ display: "flex", alignItems: "center" }}>
            <img src="https://assets.hackclub.com/icon-rounded.png" alt="Hack Club Logo" style={{ height: 48 }} />
          </ThemeLink>
          <Flex as="ul" sx={{ gap: 4, listStyle: "none", alignItems: "center", m: 0, p: 0 }}>
            {navLinks.map(link => (
              <li key={link.href}>
                <ThemeLink href={link.href} sx={{
                  textDecoration: "none",
                  color: "text",
                  fontWeight: 600,
                  fontSize: 3,
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
                  px: 4,
                  py: 2,
                  borderRadius: 999,
                  fontWeight: "bold",
                  ml: 3,
                  textDecoration: "none",
                  fontSize: 3,
                  transition: "background 0.2s",
                  "&:hover": { bg: "#c72d43" }
                }}>
                Join Slack
              </ThemeLink>
            </li>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section with Typing Animation */}
      <Box
        as="section"
        sx={{
          width: "100%",
          minHeight: ["60vh", "70vh", "70vh"],
          pt: [120, 140, 180],
          pb: [5, 6],
          bg: "linear-gradient(120deg, #ec3750 0%, #ff8c37 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "background",
          textAlign: "center",
          position: "relative",
        }}
      >
        {!showHero ? (
          <HackClubTypeAnimation onDone={() => setShowHero(true)} />
        ) : (
          <Box>
            <Heading
              as="h1"
              sx={{
                fontSize: [5, 7, 8],
                mb: [3, 4],
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "background",
              }}
            >
              Welcome to the world of teenage hackers
            </Heading>
            <Text
              as="p"
              sx={{
                fontSize: [3, 4],
                mb: [4, 5],
                fontWeight: 500,
                color: "background",
                opacity: 0.95
              }}
            >
              Join a worldwide community of high school makers, creators, and developers
            </Text>
            <Flex
              sx={{
                gap: 4,
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 2
              }}
            >
              <Button
                as="a"
                href="https://hackclub.com/slack"
                sx={{
                  bg: "background",
                  color: "primary",
                  fontWeight: "bold",
                  fontSize: [3, 4],
                  px: [4, 5],
                  py: [3, 3],
                  borderRadius: 999,
                  boxShadow: "0 2px 12px #0001",
                  mr: [0, 3],
                  mb: [2, 0],
                  transition: "transform 0.14s",
                  "&:hover": { transform: "scale(1.06)" }
                }}
              >
                Join the Slack
              </Button>
              <Button
                as="a"
                href="https://apply.hackclub.com/"
                sx={{
                  bg: "transparent",
                  color: "background",
                  border: "2px solid",
                  borderColor: "background",
                  fontWeight: "bold",
                  fontSize: [3, 4],
                  px: [4, 5],
                  py: [3, 3],
                  borderRadius: 999,
                  boxShadow: "0 2px 12px #0001",
                  transition: "transform 0.14s, background 0.2s, color 0.2s",
                  "&:hover": {
                    bg: "background",
                    color: "primary"
                  }
                }}
              >
                Start a Club
              </Button>
            </Flex>
          </Box>
        )}
      </Box>

      {/* About Section */}
      <Box as="section" id="about" sx={{ py: [5, 6], bg: "muted" }}>
        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          <Heading as="h2" sx={{
            textAlign: "center",
            fontSize: [4, 5],
            mb: 5,
            fontWeight: 900,
            color: "text"
          }}>
            For teenagers, by teenagers
          </Heading>
          <Grid columns={[1, 2, 3]} gap={4} className="features-grid">
            <Box sx={{
              bg: "background",
              p: 4,
              borderRadius: 6,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
            }}>
              <Heading as="h3" sx={{ fontSize: 3, fontWeight: 700, mb: 2, color: "text" }}>Start a Club</Heading>
              <Text sx={{ color: "text" }}>
                Build a coding club at your high school with support from the Hack Club community.
              </Text>
            </Box>
            <Box sx={{
              bg: "background",
              p: 4,
              borderRadius: 6,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
            }}>
              <Heading as="h3" sx={{ fontSize: 3, fontWeight: 700, mb: 2, color: "text" }}>Global Community</Heading>
              <Text sx={{ color: "text" }}>
                Join thousands of students worldwide in making, learning, and building together.
              </Text>
            </Box>
            <Box sx={{
              bg: "background",
              p: 4,
              borderRadius: 6,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
            }}>
              <Heading as="h3" sx={{ fontSize: 3, fontWeight: 700, mb: 2, color: "text" }}>Resources & Workshops</Heading>
              <Text sx={{ color: "text" }}>
                Access creative workshops, events, and resources to level up your skills.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
