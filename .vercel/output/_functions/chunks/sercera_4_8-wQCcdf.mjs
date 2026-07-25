const sercera3Img = new Proxy({"src":"/_astro/sercera_3.D_sKjKt4.png","width":923,"height":1219,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/ser-ceramico/src/assets/sercera_3.png";
							}
							
							return target[name];
						}
					});

const sercera4Img = new Proxy({"src":"/_astro/sercera_4.D1Kf1FGe.png","width":892,"height":1215,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/PC/Desktop/ser-ceramico/src/assets/sercera_4.png";
							}
							
							return target[name];
						}
					});

export { sercera4Img as a, sercera3Img as s };
