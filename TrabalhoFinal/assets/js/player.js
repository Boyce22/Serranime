document.addEventListener('DOMContentLoaded', () => {
  const ids = ['kimetsu', 'naruto', 'onepiece', 'sailormoon', 'fairytail', 'fullmetal', 'tokyorevengrs', 
  'aonoexorcist', 'sakuracard', 'hunterxhunter', 'jujutsukaisen', 'atackontitan', 'bleach', 'bokunohero', 'chainsawmain', 'dragonball', 'litlewitch', 'litlewitchv2', 'akamegakil', 'eightsix', 
  'bungoustray', 'magi', 'codegeass', 'cowboy', 'inuyasha', 'drstone', 'noragami', 'hellsing', 'tokyoghoul', 'vilandsaga', 'hitorishita', 'jojo', 'yuyuhakusho', 'mobpsyco', 
  'onepunchman', 'onepunchmanv2', 'yakusounoneverland', 'overlord', 'rezero', 'yugiho', 'spyxfamily', 'kaguyasama', 'daddybuddies', 'shokugeki', 'greatpretender', 'perfectblue', 'princess', 
  'devilman', 'madeinabyss', 'angelbeats', 'anohana', 'clannad', 'orange', 'orangev2',  'yourlieinapril', 'silentvoice', 'silentvoicev2', 'deathparade', 'erased', 'yakusoku', 'rezerov2', 'assasination', 
  'steinsgate', 'violetevergarden', 'eightsixv2', 'kakegurui', 'bluelock', 'haikyuu', 'yurionice', 'yurionicev2', 'kurokonobasket', 'sk8', 'given', 'kaguyasamav2', 'yagatekimininaru', 'clannadv2', 
  'horimiya', 'yourname', 'wotakoi', 'kiminotodoke' ];


  ids.forEach((id) => {
    const element = document.querySelector(`#${id}`);
    element.addEventListener('click', () => {
      reproduzirTrailer(getVideoId(id));
    });
  });
});

function getVideoId(id) {
  // mapeia o ID do elemento para o ID do vídeo no YouTube
  switch (id) {
    case 'kimetsu':
      return 'VQGCKyvzIM4';
    case 'naruto':
      return '-G9BqkgZXRA';
    case 'onepiece':
      return 'JvqcaQJgr-A';
    case 'sailormoon':
      return 'N2kKxqtTfLM';
    case 'fairytail':
      return '4KSN7mxhiYE';
    case 'fullmetal':
      return 'kx0nBaS_q50';
    case 'tokyorevengrs':
      return '2Ny3YIZWQM0';
    case 'aonoexorcist':
      return 'CwKiLNS7Vfk';
    case 'sakuracard':
      return 'VolQDjdsQpQ';
    case 'hunterxhunter':
      return 'd6kBeJjTGnY';
    case 'jujutsukaisen':
      return 'ynr6gnyu9NE';
    case 'atackontitan':
      return '6MRxT8kz30k';
    case 'bleach':
      return 'fuwPuimFQkY';
    case 'bokunohero':
      return 'RugjT3HYbes';
    case 'chainsawmain':
      return 'Cb9F59uvA_0';
    case 'dragonball':
      return '_K91eeP25NA';
    case 'litlewitch':
      return 'O3RaHXSeUG8';
    case 'litlewitchv2':
      return 'O3RaHXSeUG8';
    case 'akamegakil':
      return 'sCGWxQuSoDU';
    case 'eightsix':
      return 'fQoxKVLkrEY';
    case 'bungoustray':
      return 'ZJQKVFYs2-k';
    case 'magi':
      return '2E7o26G1T0c';
    case 'codegeass':
      return 'v-AGjx0N24U';
    case 'cowboy':
      return 'OhNwckCLzis';
    case 'inuyasha':
      return 'Nm_fTt96Sl8';
    case 'drstone':
      return 'vHtZhVtEu04';
    case 'noragami':
      return 'IQnnwUXd_0U';
    case 'hellsing':
      return 'TUwPcpDlq_I';
    case 'tokyoghoul':
      return 'vGuQeQsoRgU';
    case 'vilandsaga':
      return 'ML_alfGj_ms';
    case 'hitorishita':
      return 'CMEj21YKD84';
    case 'jojo':
      return 'zmNxNnuILjY';
    case 'yuyuhakusho':
      return 'urZWmEgm72Q';
    case 'mobpsyco':
      return 'b2mzVRAhYXc';
    case 'onepunchman':
      return 'Poo5lqoWSGw';
    case 'onepunchmanv2':
      return 'Poo5lqoWSGw';
    case 'yakusounoneverland':
      return '48WkJZme5hY';
    case 'overlord':
      return 'uhlBqFj9kDw';
    case 'rezero':
      return 'k1MhUhVjqXc';
    case 'yugiho':
      return 'nLn4J50xjIw';
    case 'swordartonline':
      return '2ZX9mrgilPo';
    case 'spyxfamily':
      return '0CJr6AfE2rY';
    case 'kaguyasama':
      return 'N4UH-kkVJpA';
    case 'daddybuddies':
      return 'Oqxm1mn917g';
    case 'shokugeki':
      return 'oQWS20ClOZ8';
    case 'greatpretender':
      return 'PmfiUz4fkjw';
    case 'perfectblue':
      return 'dpaCRJ_u600';
    case 'princess':
      return 'RKXsnbQt5M4';
    case 'devilman':
      return 'ww06yGPM7Kc';
    case 'madeinabyss':
      return 'kqBNQEUI8dM';
    case 'angelbeats':
      return 'Turf7WDB3iY';
    case 'anohana':
      return 'x8fvwC5xVGg';
    case 'clannad':
      return 'V3KoHCipdy4';
    case 'orange':
      return 'kVDqRG0qbBs';
    case 'orangev2':
      return 'kVDqRG0qbBs';
    case 'yourlieinapril':
      return '3aL0gDZtFbE';
    case 'silentvoice':
      return 'nfK6UgLra7g';
    case 'silentvoicev2':
      return 'nfK6UgLra7g';
    case 'deathparade':
      return 'Ca5Tf5BDSYI';
    case 'erased':
      return 'DwmxEAWjTQQ';
    case 'yakusoku':
      return 'ApLudqucq-s';
    case 'rezerov2':
      return 'k1MhUhVjqXc';
    case 'assasination':
      return 'kgNkGohA20k';
    case 'steinsgate':
      return 'uMYhjVwp0Fk';
    case 'violetevergarden':
      return 'R5xn78CR96M';
    case 'eightsixv2':
      return 'fQoxKVLkrEY';
    case 'kakegurui':
      return 'cTlHQiRNVl0';
    case 'bluelock':
      return 'RezlceK7wiM';
    case 'haikyuu':
      return 'cK8VlGTmem4';
    case 'yurionice':
      return 'TJjj_OauGxo';
    case 'yurionicev2':
      return 'TJjj_OauGxo';
    case 'kurokonobasket':
      return 'nb7e5_4CGag';
    case 'sk8':
      return 'eUHMO2VMolU';
    case 'given':
      return '3xVRTHbCt1A';
    case 'kaguyasamav2':
      return 'N4UH-kkVJpA';
    case 'yagatekimininaru':
      return '0hgwUqC5_mM';
    case 'kiminotodoke':
      return '_gJR6gfRYEQ';
    case 'clannadv2':
      return 'V3KoHCipdy4';
    case 'horimiya':
      return 'xAlMLB5VoLQ';
    case 'yourname':
      return 'soQXM3XVvIU';
    case 'wotakoi':
      return 'Uy90rTP9mLs';
    default:
      return '';
  }
}

function reproduzirTrailer(id) {
  // Cria o elemento <iframe> do player do YouTube
  const playerElement = document.createElement('iframe');
  playerElement.setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1`);
  playerElement.setAttribute('allowfullscreen', '');
  playerElement.setAttribute('width', '100%');
  playerElement.setAttribute('height', '100%');

  // Cria o botão de fechar
  const closeButton = document.createElement('button');
  closeButton.innerHTML = 'CLOSE VIEWER';
  closeButton.classList.add('close-button');
  closeButton.addEventListener('click', fecharModal);

  // Cria a caixa modal
  const modalElement = document.createElement('div');
  modalElement.classList.add('modal');
  modalElement.appendChild(playerElement);
  modalElement.appendChild(closeButton);

  // Adiciona a caixa modal ao body
  document.body.appendChild(modalElement);

  // Exibe a caixa modal
  modalElement.style.display = 'flex';
  setTimeout(function () { modalElement.classList.add('open-modal') }, 10);
}

function fecharModal() {
  // Esconde a caixa modal
  const modalElement = document.querySelector('.modal');
  modalElement.style.display = 'none';

  // Para a reprodução do vídeo
  const playerElement = modalElement.querySelector('iframe');
  playerElement.setAttribute('src', '');

  // Remove a caixa modal do body
  modalElement.remove();
}
