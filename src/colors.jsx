const colors = {
  clientColor: `00e2b3`,
};

function setCSSVariables() {
  document.documentElement.style.setProperty(
    "--client-color",
    `#${colors.clientColor}`
  );
}

export { colors, setCSSVariables };
