export default function isGrinnellEmail(email) {
  const user = email.trim().toLowerCase().substring(0, email.indexOf('@'));
  const re = /\S+@grinnell.edu$/;
  return (
    (re.test(email.trim().toLowerCase()))
    && 
    (user.length <= 8 && user.length >= 4));
}