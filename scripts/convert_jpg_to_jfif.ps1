$imgs = Get-ChildItem -Path . -Include *.jpg,*.jpeg -Recurse -File
foreach ($img in $imgs) {
  $new = [System.IO.Path]::ChangeExtension($img.FullName, '.jfif')
  if (-not (Test-Path $new)) { Copy-Item -LiteralPath $img.FullName -Destination $new }
  $name = $img.Name
  $newname = [System.IO.Path]::ChangeExtension($name, '.jfif')
  $files = Get-ChildItem -Path . -Include *.html,*.css,*.js -Recurse -File
  foreach ($f in $files) {
    $text = Get-Content -Raw -LiteralPath $f.FullName
    $newtext = $text -replace [regex]::Escape($name), $newname
    if ($newtext -ne $text) { Set-Content -LiteralPath $f.FullName -Value $newtext -Encoding UTF8 }
  }
}
Write-Output 'Done'
