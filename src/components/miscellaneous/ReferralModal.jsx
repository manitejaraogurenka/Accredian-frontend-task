import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-hot-toast";
import { submitReferral } from "../../helper/api.js";

const courses = [
  "Executive Program in Data Science and Product Management",
  "Executive Program in Data Science and Digital Transformation",
  "Professional Certificate Program in Data Science",
  "Professional Certificate Program in Product Management",
  "Executive Program in Data Driven Product Management",
  "Executive Program in Product Management",
];

const ReferralModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
    course: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await submitReferral(formData);
      if (response.status === 200) {
        toast.success("Referral submitted successfully!");
        setFormData({
          referrerName: "",
          referrerEmail: "",
          refereeName: "",
          refereeEmail: "",
          course: "",
        });
        onClose();
      } else {
        toast.error("Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 600,
          bgcolor: "#ffffff",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h5" component="h2" fontWeight={"600"}>
            Referral Form
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Referrer Name"
            name="referrerName"
            value={formData.referrerName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Referrer Email"
            name="referrerEmail"
            type="email"
            value={formData.referrerEmail}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Referee Name"
            name="refereeName"
            value={formData.refereeName}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            fullWidth
            label="Referee Email"
            name="refereeEmail"
            type="email"
            value={formData.refereeEmail}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <FormControl fullWidth margin="normal" variant="outlined" required>
            <InputLabel id="course-label">Course</InputLabel>
            <Select
              labelId="course-label"
              name="course"
              value={formData.course}
              onChange={handleChange}
              label="Course"
            >
              {courses.map((course, index) => (
                <MenuItem key={index} value={course}>
                  {course}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3, width: "100%", borderRadius: 2, fontSize: "1rem" }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Submit"}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
