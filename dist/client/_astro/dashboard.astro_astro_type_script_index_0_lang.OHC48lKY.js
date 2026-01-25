let o={};async function p(){const a=localStorage.getItem("anubisreal-data");a?(o=JSON.parse(a),console.log("Datos cargados desde localStorage")):o=await(await fetch("/data.json")).json(),o.socialCards&&(o.socialCards=o.socialCards.map(e=>({...e,profileImage:e.profileImage||""}))),console.log("Datos cargados:",o),s(),g(),n()}function s(){const a=document.getElementById("socialCards");a.innerHTML=o.socialCards.map((e,t)=>`
                <div class="card">
                    <div class="card-header">
                        <h3>${e.platform}</h3>
                    </div>
                    <div class="form-group" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <label style="min-width: 80px; margin-bottom: 0; font-size: 10px;">Imagen</label>
                        <div style="flex: 1; display: flex; align-items: center; gap: 10px;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background: ${e.profileImage?`url(${e.profileImage})`:"linear-gradient(135deg, rgba(71, 198, 117, 0.3), rgba(71, 198, 117, 0.1))"};  background-size: cover; background-position: center; border: 2px solid rgba(255, 255, 255, 0.2); overflow: hidden;"></div>
                            <input type="file" 
                                   accept="image/*"
                                   data-index="${t}" 
                                   data-field="profileImage"
                                   id="file-${t}"
                                   style="display: none;">
                            <label for="file-${t}" style="padding: 8px 16px; background: rgba(71, 198, 117, 0.2); color: #47C675; border: 1px solid rgba(71, 198, 117, 0.3); border-radius: 6px; font-size: 11px; font-weight: 600; cursor: pointer; transition: all 0.2s ease; margin: 0; text-transform: none; letter-spacing: 0;">Seleccionar</label>
                        </div>
                    </div>
                    <div class="form-group" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                        <label style="min-width: 80px; margin-bottom: 0;">Usuario</label>
                        <input type="text" 
                               value="${e.username}" 
                               data-index="${t}" 
                               data-field="username" 
                               placeholder="usuario"
                               style="flex: 1; padding: 10px 12px; background: rgba(20, 20, 25, 0.8) !important; border: 1.5px solid rgba(255, 255, 255, 0.2) !important; border-radius: 8px !important; color: #ffffff !important; font-size: 13px !important; font-family: 'Inter', sans-serif !important; transition: all 0.3s ease;">
                    </div>
                    <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
                        <div style="display: flex; align-items: center; gap: 6px;">
                            <label style="min-width: 60px; margin-bottom: 0; font-size: 9px; white-space: nowrap;">Seguidores</label>
                            <input type="text" 
                                   value="${e.followers}" 
                                   data-index="${t}" 
                                   data-field="followers" 
                                   placeholder="0"
                                   style="width: 100%; padding: 10px 8px; background: rgba(20, 20, 25, 0.8) !important; border: 1.5px solid rgba(255, 255, 255, 0.2) !important; border-radius: 8px !important; color: #ffffff !important; font-size: 13px !important; font-family: 'Inter', sans-serif !important; transition: all 0.3s ease;">
                        </div>
                        <div style="display: flex; align-items: center; gap: 6px;">
                            <label style="min-width: 60px; margin-bottom: 0; font-size: 9px; white-space: nowrap;">Siguiendo</label>
                            <input type="text" 
                                   value="${e.following}" 
                                   data-index="${t}" 
                                   data-field="following" 
                                   placeholder="0"
                                   style="width: 100%; padding: 10px 8px; background: rgba(20, 20, 25, 0.8) !important; border: 1.5px solid rgba(255, 255, 255, 0.2) !important; border-radius: 8px !important; color: #ffffff !important; font-size: 13px !important; font-family: 'Inter', sans-serif !important; transition: all 0.3s ease;">
                        </div>
                    </div>
                    <div class="form-group" style="display: flex; align-items: center; gap: 12px;">
                        <label style="min-width: 80px; margin-bottom: 0;">URL</label>
                        <input type="text" 
                               value="${e.url}" 
                               data-index="${t}" 
                               data-field="url" 
                               placeholder="https://..."
                               style="flex: 1; padding: 10px 12px; background: rgba(20, 20, 25, 0.8) !important; border: 1.5px solid rgba(255, 255, 255, 0.2) !important; border-radius: 8px !important; color: #ffffff !important; font-size: 13px !important; font-family: 'Inter', sans-serif !important; transition: all 0.3s ease;">
                    </div>
                </div>
            `).join(""),a.querySelectorAll('input[type="text"]').forEach(e=>{e.addEventListener("input",t=>{const r=t.target.dataset.index,i=t.target.dataset.field;o.socialCards[r][i]=t.target.value}),e.addEventListener("focus",t=>{t.target.style.borderColor="#47C675",t.target.style.boxShadow="0 0 0 3px rgba(71, 198, 117, 0.15)",t.target.style.background="rgba(20, 20, 25, 0.95)"}),e.addEventListener("blur",t=>{t.target.style.borderColor="rgba(255, 255, 255, 0.2)",t.target.style.boxShadow="none",t.target.style.background="rgba(20, 20, 25, 0.8)"}),e.addEventListener("mouseenter",t=>{document.activeElement!==t.target&&(t.target.style.borderColor="rgba(255, 255, 255, 0.3)")}),e.addEventListener("mouseleave",t=>{document.activeElement!==t.target&&(t.target.style.borderColor="rgba(255, 255, 255, 0.2)")})}),a.querySelectorAll('input[type="file"]').forEach(e=>{e.addEventListener("change",t=>{const r=t.target.dataset.index,i=t.target.files[0];if(i){const l=new FileReader;l.onload=d=>{o.socialCards[r].profileImage=d.target.result,s()},l.readAsDataURL(i)}})})}function g(){const a=document.getElementById("spotifyUrl");a.value=o.spotify.embedUrl,a.addEventListener("input",e=>{o.spotify.embedUrl=e.target.value}),a.addEventListener("focus",e=>{e.target.style.borderColor="#47C675",e.target.style.boxShadow="0 0 0 3px rgba(71, 198, 117, 0.15)",e.target.style.background="rgba(20, 20, 25, 0.95)"}),a.addEventListener("blur",e=>{e.target.style.borderColor="rgba(255, 255, 255, 0.2)",e.target.style.boxShadow="none",e.target.style.background="rgba(20, 20, 25, 0.8)"}),a.addEventListener("mouseenter",e=>{document.activeElement!==e.target&&(e.target.style.borderColor="rgba(255, 255, 255, 0.3)")}),a.addEventListener("mouseleave",e=>{document.activeElement!==e.target&&(e.target.style.borderColor="rgba(255, 255, 255, 0.2)")})}function n(){const a=document.getElementById("videosList");a.innerHTML=o.videos.map((e,t)=>`
                <div class="video-item">
                    <input type="text" 
                           value="${e.url}" 
                           data-index="${t}" 
                           placeholder="URL del video de YouTube"
                           style="flex: 1; padding: 14px 16px; background: rgba(20, 20, 25, 0.8) !important; border: 2px solid rgba(255, 255, 255, 0.15) !important; border-radius: 10px !important; color: #ffffff !important; font-size: 14px !important; font-family: 'Inter', sans-serif !important;">
                    <button class="delete-btn" data-index="${t}">×</button>
                </div>
            `).join(""),a.querySelectorAll("input").forEach(e=>{e.addEventListener("input",t=>{const r=t.target.dataset.index;o.videos[r].url=t.target.value}),e.addEventListener("focus",t=>{t.target.style.borderColor="#47C675",t.target.style.boxShadow="0 0 0 3px rgba(71, 198, 117, 0.2)"}),e.addEventListener("blur",t=>{t.target.style.borderColor="rgba(255, 255, 255, 0.15)",t.target.style.boxShadow="none"})}),a.querySelectorAll(".delete-btn").forEach(e=>{e.addEventListener("click",t=>{const r=t.target.dataset.index;o.videos.splice(r,1),n()})})}document.getElementById("addVideoBtn").addEventListener("click",()=>{o.videos.push({id:`video${Date.now()}`,url:""}),n()});document.getElementById("saveBtn").addEventListener("click",async()=>{const a=document.getElementById("notification");a.textContent="Guardando...",a.className="notification show";try{localStorage.setItem("anubisreal-data",JSON.stringify(o)),(await(await fetch("/api/save-data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).json()).success?a.textContent="✓ Cambios guardados":(a.textContent="✓ Guardado localmente (refresca para ver cambios)",console.log("Datos guardados en localStorage:",o))}catch{localStorage.setItem("anubisreal-data",JSON.stringify(o)),a.textContent="✓ Guardado localmente (refresca para ver cambios)",console.log("Datos guardados en localStorage:",o),console.log("Para usar estos datos, copia el JSON de la consola")}setTimeout(()=>{a.className="notification"},3e3)});p();
