const workshopImg = new Proxy({"src":"/_astro/atelier-workshop.D8Oj3mnL.jpg","width":1920,"height":1080,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/ser-ceramico/src/assets/atelier-workshop.jpg";
							}
							
							return target[name];
						}
					});

export { workshopImg as w };
