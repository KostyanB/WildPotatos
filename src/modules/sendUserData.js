
const sendUserData = userData => fetch('server.php', {
	method: 'POST',
	body: userData,
});
export default sendUserData;
