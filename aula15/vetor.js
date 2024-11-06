var valores = [8,1,7,4,2,9]
valores.sort()
/*for(c=0;c<valores.length;c++)
    console.log(`A posição ${c} do meu vetor contém ${valores[c]}`)
*/
for (var c in valores){
    console.log(`A posição ${c} do meu vetor contém ${valores[c]}`)
}
