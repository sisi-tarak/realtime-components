import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  CircularProgress,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const projectsData = [
  {
    id: "project-01",
    title: "Graphic Design Project",
    description:
      "A comprehensive branding project for a tech startup, including logo design, color palette, and marketing materials.",
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
    duration: "4 weeks",
    client: "TechStart Inc.",
    src: "./src/assets/Projects/Graphic.webm",
  },
];

const dynamicProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProject = async () => {
      setLoading(true);
      // In a real app, you'd fetch data from an API here
      const foundProject = projectsData.find((p) => p.id === projectId);

      if (foundProject) {
        setProject(foundProject);
      } else {
        // Handle case where project is not found
        console.error("Project not found");
        // Optionally redirect to a 404 page
        // navigate('/404');
      }
      setLoading(false);
    };

    fetchProject();
  }, [projectId, navigate]);

  if (loading) {
    return (
      <Container
        maxWidth="lg"
        className="flex justify-center items-center h-screen text-headColor"
      >
        <CircularProgress />
      </Container>
    );
  }

  if (!project) {
    return (
      <Container maxWidth="lg">
        <Typography variant="h4" className="text-headColor">
          Project not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className="py-8 text-headColor">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/projects")}
        className="mb-4"
      >
        Back to Projects
      </Button>

      <Typography variant="h3" className="mb-4">
        {project.title}
      </Typography>

      <Box className="mb-6">
        <video
          src={project.src}
          className="w-full max-h-[500px] object-cover rounded-lg"
          controls
          autoPlay
          loop
          muted
        />
      </Box>

      <Typography variant="body1" className="mb-4">
        {project.description}
      </Typography>

      <Box className="mb-4">
        <Typography variant="h6" className="mb-2">
          Technologies Used:
        </Typography>
        {project.technologies.map((tech, index) => (
          <Chip key={index} label={tech} className="mr-2 mb-2" />
        ))}
      </Box>

      <Box className="mb-4">
        <Typography variant="body1">
          <strong>Duration:</strong> {project.duration}
        </Typography>
      </Box>

      <Box className="mb-4">
        <Typography variant="body1">
          <strong>Client:</strong> {project.client}
        </Typography>
      </Box>

      {/* Add more project details as needed */}
    </Container>
  );
};

export default dynamicProjectDetails;
