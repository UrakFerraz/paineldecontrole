var closeModalAgBtn = document.querySelector('.closeModalAgBtn');
var ComprarCreditosBtn = document.querySelector('.ComprarCreditosBtn');
var newAgsBtn = document.querySelector('.newAgsBtn');
var cadastrarAgWrapper = document.querySelector('.cadastrarAgWrapper');

var SalvarBtnClientesModal = document.querySelector('.SalvarBtnClientesModal');
var closeModalClientesBtn = document.querySelector('.closeModalClientesBtn');
var cadastrarClientesWrapper = document.querySelector('.cadastrarClientesWrapper');
var newClienteBtn = document.querySelector('.newClienteBtn');



var contatoFotoDadosBtnPlus = document.querySelector('.contatoFotoDadosBtnPlus');
var closeModalAgAsideBtn = document.querySelector('.closeModalAgAsideBtn');
var agAsideModal = document.querySelector('.agAsideModal');




newAgsBtn.addEventListener('click', function() {
	cadastrarAgWrapper.style.display = 'flex';
});


closeModalAgBtn.addEventListener('click', function() {
	cadastrarAgWrapper.style.display = 'none';
});


newClienteBtn.addEventListener('click', function() {
	cadastrarClientesWrapper.style.display = 'flex';
});

closeModalClientesBtn.addEventListener('click', function() {
	cadastrarClientesWrapper.style.display = 'none';
});



contatoFotoDadosBtnPlus.addEventListener('click', function() {
	agAsideModal.style.display = 'flex';
});

closeModalAgAsideBtn.addEventListener('click', function() {
	agAsideModal.style.display = 'none';
});