export default function isGrinnellEmail(email) {
  const re = /\S+@grinnell.edu$/;
  return re.test(email.trim().toLowerCase());
}