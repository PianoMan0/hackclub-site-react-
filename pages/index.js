/** @jsxImportSource theme-ui */
import { useState, useEffect } from "react";
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
  const text = "Hack Club";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    setTyped(""); // Clear at start
    let idx = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, idx + 1));
      idx++;
      if (idx === text.length) {
        clearInterval(interval);
        setTimeout(onDone, 900);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [onDone, text]);

  return (
    <Heading
      as="h1"
      sx={{
        fontSize: [5, 7, 8],
        mb: [3, 4],
        fontWeight: 900,
        lineHeight: 1.1,
        letterSpacing: "-0.02em",
        color: "primary",
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
        {/* ...meta and favicon tags unchanged... */}
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
          <Box sx={{ width: "100%" }}>
            <Heading
              as="h1"
              sx={{
                fontSize: [5, 7, 8],
                mb: [3, 4],
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "primary", // Red
                textShadow: "0 2px 8px #fff8",
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
                color: "text", // Black
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
                  bg: "background", // Make button background white
                  color: "primary", // Make text red and always visible
                  border: "2px solid",
                  borderColor: "primary",
                  fontWeight: "bold",
                  fontSize: [3, 4],
                  px: [4, 5],
                  py: [3, 3],
                  borderRadius: 999,
                  boxShadow: "0 2px 12px #0001",
                  transition: "transform 0.14s, background 0.2s, color 0.2s, border-color 0.2s",
                  "&:hover": {
                    bg: "primary",
                    color: "background",
                    borderColor: "primary"
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
        <Box sx={{ maxWidth: 1000, mx: "auto" }}>
          <Heading as="h2" sx={{
            textAlign: "center",
            fontSize: [4, 5],
            mb: 5,
            fontWeight: 900,
            color: "text",
            letterSpacing: "-0.01em",
            textShadow: "0 2px 16px #ff8c3722, 0 1px 2px #ec375033"
          }}>
            For teenagers, by teenagers
          </Heading>
          <Grid
            columns={[1, 2, 3]}
            gap={4}
            className="features-grid"
            sx={{
              boxShadow: "0 8px 32px #ec375008",
              justifyItems: "center"
            }}
          >
            <Box sx={{
              bg: "background",
              p: [3, 4],
              borderRadius: 12,
              boxShadow: "0 8px 32px #ec375022, 0 2px 4px #ff8c3722",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: "0 12px 48px #ff8c3755, 0 4px 8px #ec375044",
                transform: "translateY(-4px) scale(1.03)"
              },
              minHeight: 180,
              maxWidth: 320,
              textAlign: "left",
              border: "1.5px solid #f9fafc",
            }}>
              <Heading as="h3" sx={{ fontSize: 3, fontWeight: 700, mb: 2, color: "primary" }}>Start a Club</Heading>
              <Text sx={{ color: "text", fontSize: 2 }}>
                Build a coding club at your high school with support from the Hack Club community.
              </Text>
            </Box>
            <Box sx={{
              bg: "background",
              p: [3, 4],
              borderRadius: 12,
              boxShadow: "0 8px 32px #ec375022, 0 2px 4px #ff8c3722",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: "0 12px 48px #ff8c3755, 0 4px 8px #ec375044",
                transform: "translateY(-4px) scale(1.03)"
              },
              minHeight: 180,
              maxWidth: 320,
              textAlign: "left",
              border: "1.5px solid #f9fafc",
            }}>
              <Heading as="h3" sx={{ fontSize: 3, fontWeight: 700, mb: 2, color: "primary" }}>Global Community</Heading>
              <Text sx={{ color: "text", fontSize: 2 }}>
                Join thousands of students worldwide in making, learning, and building together.
              </Text>
            </Box>
            <Box sx={{
              bg: "background",
              p: [3, 4],
              borderRadius: 12,
              boxShadow: "0 8px 32px #ec375022, 0 2px 4px #ff8c3722",
              transition: "box-shadow 0.2s, transform 0.2s",
              "&:hover": {
                boxShadow: "0 12px 48px #ff8c3755, 0 4px 8px #ec375044",
                transform: "translateY(-4px) scale(1.03)"
              },
              minHeight: 180,
              maxWidth: 320,
              textAlign: "left",
              border: "1.5px solid #f9fafc",
            }}>
              <Heading as="h3" sx={{ fontSize: 3, fontWeight: 700, mb: 2, color: "primary" }}>Resources & Workshops</Heading>
              <Text sx={{ color: "text", fontSize: 2 }}>
                Access creative workshops, events, and resources to level up your skills.
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
