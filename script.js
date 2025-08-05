//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort((a, b) => {
  const cleanA = a.replace(/^(a|an|the)\s/i, '');
  const cleanB = b.replace(/^(a|an|the)\s/i, '');
  return cleanA.localeCompare(cleanB);
});

const ul = document.createElement('ul');
ul.id = 'bands';

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

document.body.appendChild(ul);