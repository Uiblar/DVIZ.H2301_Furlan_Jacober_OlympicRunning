import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import sprintEventsImage from "../assets/sprint_events.png";
import middleDistanceEventsImage from "../assets/middle_distance_events.png";
import longDistanceEventsImage from "../assets/long_distance_events.png";
import paceByEventImage from "../assets/pace_by_event.png";
import "./DataStory.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function DataStory() {
  const marathonhandbook = "https://marathonhandbook.com/peak-athleticism/";
  const runnersworld =
    "https://www.runnersworld.com/advanced/a20848096/age-matters-for-marathoning/";

  // Images for the lightbox
  const images = [
    { src: sprintEventsImage },
    { src: middleDistanceEventsImage },
    { src: longDistanceEventsImage },
    { src: paceByEventImage },
  ];
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Box className="container">
        <Typography variant="h6" component="p" sx={{ mb: 2 }}>
          What is the expected age of peak performance for runners? And does
          this vary by event? Let's take a look at the age distribution of the
          top 1000 runners in each event. It is generally accepted that peak
          performance for athletes is around 25 years old, but is this actually
          supported by the data?
          <Tooltip title={marathonhandbook}>
            <Link
              href={marathonhandbook}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: "5px" }}
            >
              <sup>[1]</sup>
            </Link>
          </Tooltip>
        </Typography>
        <Box className="row">
          <Typography variant="h6" component="p" className="text">
            For the sprint events (100m, 200m, 400m), we see that the peak age
            is in the early 20s.
            <br />
            It is interesting to note that that the woman peak slightly later
            than the man.
          </Typography>
          <Box
            component="img"
            src={sprintEventsImage}
            alt="Sprint Events Age Distribution"
            className="image"
            onClick={() => openLightbox(0)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Box className="row">
          <Box
            component="img"
            src={middleDistanceEventsImage}
            alt="Middle Distance Events Age Distribution"
            className="image"
            onClick={() => openLightbox(1)}
            sx={{ cursor: "pointer" }}
          />
          <Typography variant="h6" component="p" className="text">
            For the middle distance events (800m, 1500m, 3000m), we see that the
            performance ages remain consistent with our initial observations.
            The data suggests a subtle yet observable variance in peak
            performance timing between genders across these disciplines.
          </Typography>
        </Box>
        <Box className="row">
          <Typography variant="h6" component="p" className="text">
            Many athlets start their careers on the track and move up to the
            half marathon and marathon later in their careers. While this is
            reflected in the top times for the marathon, a larger proportion of
            the top times in the half marathon are from athletes in their early
            20s.
            <Link
              href={runnersworld}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: "5px" }}
            >
              <sup>[2]</sup>
            </Link>
          </Typography>
          <Box
            component="img"
            src={longDistanceEventsImage}
            alt="Long Distance Events Age Distribution"
            className="image"
            onClick={() => openLightbox(2)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Box className="row">
          <Box
            component="img"
            src={paceByEventImage}
            alt="Pace by event"
            className="image"
            onClick={() => openLightbox(3)}
            sx={{ cursor: "pointer" }}
          />
          <Typography variant="h6" component="p" className="text">
            Athletic performance hinges on two energy systems: anaerobic for
            short, intense activities like sprints, and aerobic for longer,
            endurance events. The anaerobic system quickly delivers energy
            without oxygen, ideal for events up to 400m. In contrast, the
            aerobic system, vital for races over 800m, depends on oxygen and
            endurance training. Developing aerobic capacity takes years,
            explaining why long-distance athletes are often older. Their
            prolonged training culminates in a robust aerobic system, suited for
            the demands of endurance events.
          </Typography>
        </Box>
        <Box className="row">
          <Typography variant="h6" component="p" className="text">
            During the Cold War era, the USA and Russia emerged as formidable
            rivals in global athletics. This rivalry was marked by intense
            competition and numerous record-setting performances. However, over
            the past three decades, the landscape of athletic dominance has
            shifted significantly. African nations, notably Kenya and Ethiopia,
            have risen to prominence, showcasing exceptional talent and
            resilience in various events. Their athletes have consistently
            broken records and won numerous accolades, redefining the standards
            of excellence in athletics and inspiring a new generation of
            runners.
          </Typography>
          <iframe
            src="choropleth_map.html"
            width="100%"
            height={650}
            title="Records by Country"
          ></iframe>
        </Box>
      </Box>
      <Lightbox
        open={lightboxOpen}
        index={selectedIndex}
        close={() => setLightboxOpen(false)}
        slides={images}
      />
    </>
  );
}
