export const uploadToCloudinary = async (file, resourceType = 'auto') => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'ryestqxz'); 
  formData.append('cloud_name', 'dnrrmyqf5'); 

  console.log(`[Cloudinary] Starting upload... Type: ${resourceType}, File: ${file.name}`);

  try {
    // Используем 'auto' для универсальности, если не указано иное
    const type = resourceType === 'voice' ? 'video' : resourceType;
    
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dnrrmyqf5/${type}/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('[Cloudinary] Error response:', errorData);
      throw new Error(errorData.error?.message || `Upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('[Cloudinary] Upload success:', data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error('[Cloudinary] Network error:', error);
    alert(`Ошибка загрузки файла: ${error.message}. Проверьте интернет или размер файла.`);
    throw error;
  }
};
