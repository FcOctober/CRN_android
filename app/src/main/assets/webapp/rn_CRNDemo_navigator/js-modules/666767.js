__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(n){var t=n.scene,f=n.scenes,s=t.index,u=f.length-1;if(!f[u].isActive){var l=f.findIndex(function(n){return n===t}),c=f.findIndex(function(n){return n.isActive}),o=f[c].index,v=f[u].index;return s!==o&&l===u?{first:Math.min(o,s-1),last:s+1}:s===o&&l===c?{first:s-1,last:Math.max(v,s+1)}:s===o||l>c?null:{first:s-1,last:s+1}}return{first:s-1,last:s+1}};e.default=n},666767,[]);