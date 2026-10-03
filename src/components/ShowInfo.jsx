import React from "react";

const Info = ({ children }) => {
  return (
    <div style={styles.container}>
      <span style={styles.icon}>ⓘ</span>
      <span>{children}</span>
    </div>
  );
};

const styles = {
  container: {
    // display: "flex",
    // alignItems: "center",
    
    // gap: "8px",
    "text-align":"center",
    padding: "10px 14px",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    backgroundColor: "#f8fafc",
    color: "#475569",
    fontSize: "20px",
  },

  icon: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Info;