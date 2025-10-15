# 🔧 System Task Manager

Keep your library running smoothly with automated maintenance tasks. Monitor progress in real-time, manage storage efficiently, and ensure your metadata stays synchronized with your book files.

![Task Management Overview](/img/task-manager/task-manager-1.jpg)

:::note
Tasks run asynchronously in the background, allowing you to continue using Booklore while they execute.
:::

---

## 🌟 What You'll Achieve

With System Task Manager, you can:

- **Free up disk space** by clearing cached files when needed
- **Synchronize metadata** between your database and book files
- **Monitor task progress** in real-time with live updates
- **Manage background operations** without interrupting your workflow
- **Handle stuck tasks** with built-in stale detection

:::tip[Pro Tip]
Run cache clearing tasks periodically to maintain optimal storage usage, and refresh metadata after bulk file modifications.
:::

---

## ✨ Key Features & Capabilities

### 📊 Real-Time Task Monitoring

- **Live Progress Updates**: Watch tasks execute with WebSocket-based status updates
- **Visual Progress Bars**: Track completion percentage at a glance
- **Status Indicators**: Color-coded badges show task state instantly
- **Task History**: View completion timestamps and last run information

### 🛠️ Available Maintenance Tasks

- **Cache Management**: Clear CBX and PDF caches to free up storage
- **Metadata Synchronization**: Refresh database from library files
- **Flexible Options**: Choose how metadata updates are applied
- **Concurrent Execution**: Run multiple tasks simultaneously

---

## 📖 Understanding Available Tasks

### 🗑️ Cache Clearing Tasks

**Clear CBX Cache**
- Removes cached extracted images from Comic Book Archive files
- Frees up disk space consumed by cached pages
- Cache rebuilds automatically during reading
- Safe to run anytime without data loss

**Clear PDF Cache**
- Removes cached rendered pages from PDF documents
- Reclaims storage used by PDF page previews
- Improves reading performance when cache is active
- Cache regenerates on-demand during usage

### 🔄 Metadata Refresh Task

**Refresh Metadata from Library Files**

Synchronizes your database with metadata stored in actual book files.

**Replace Modes:**

- **Replace Missing Only (Recommended)**: Updates only empty or missing metadata fields while preserving existing data
- **Replace All Metadata**: Overwrites all database metadata with file-based metadata, even if data already exists

:::warning[Important]
"Replace All Metadata" will overwrite your existing database metadata. Use this mode carefully, preferably after backing up your database.
:::

---

## 🚀 Managing Tasks

### Accessing Task Management

1. **Navigate to Task Management:**
   - Go to **Settings** in the main navigation
   - Select **Task Management** from the settings menu

2. **View Available Tasks:**
   - Browse the list of maintenance tasks
   - Check current status and last run timestamps
   - Review task-specific information and options

3. **Refresh Task List:**
   - Click **Refresh** in the top right corner
   - Updates all task statuses manually
   - Useful for checking latest information

---

## 🗑️ Clearing Cache Storage

Free up disk space by removing cached files that can be safely regenerated.

### When to Clear Cache

Clear caches when:

- **Storage is Low**: Free up gigabytes of disk space quickly
- **Cache is Large**: Monitor sizes shown in task descriptions
- **After Updates**: Clean up outdated cached files
- **Troubleshooting**: Resolve rendering issues by forcing cache rebuild

### Clearing CBX or PDF Cache

![Clear Cache Task](/img/task-manager/task-manager-2.jpg)

1. **Locate the Cache Task:**
   - Find **Clear CBX Cache** or **Clear PDF Cache**
   - Review the current cache size displayed

2. **Start Cache Clearing:**
   - Click **Clear Cache** button
   - Task begins immediately
   - Monitor progress if available

3. **Verify Completion:**

   ![Cache Cleared Complete](/img/task-manager/task-manager-3.jpg)
   - Success status appears with timestamp
   - Cache size updates to reflect freed space
   - Run again anytime as cache rebuilds during use

### What Happens When You Clear Cache

- ✅ Cached files are permanently deleted
- ✅ Disk space is freed immediately
- ✅ Books remain in your library untouched
- ✅ Cache rebuilds automatically when you read
- ⚠️ First page loads may be slightly slower after clearing

---

## 🔄 Refreshing Metadata

Synchronize your database with metadata embedded in your book files.

### When to Refresh Metadata

Refresh metadata when:

- **Files Modified Externally**: You've edited book files outside Booklore
- **After Bulk Imports**: Ensure all file metadata is captured
- **Restoring Data**: Recover metadata from backup files
- **Fixing Inconsistencies**: Sync database with authoritative file data

### Choosing a Replace Mode

![Metadata Refresh Options](/img/task-manager/task-manager-4.jpg)

**Replace Missing Only (Recommended)**
- ✅ Safe for routine maintenance
- ✅ Preserves existing database metadata
- ✅ Only fills in missing or empty fields
- ✅ Best for most use cases

**Replace All Metadata**
- ⚠️ Overwrites all existing metadata
- ⚠️ Use only when restoring from files
- ⚠️ Backup database first
- ⚠️ Cannot be undone

### Starting a Metadata Refresh

1. **Select Replace Mode:**
   - Choose between "Replace Missing Only" or "Replace All Metadata"
   - Consider the impact on your existing data
   - Verify your choice before proceeding

2. **Start the Refresh:**
   - Click **Start Refresh** button
   - Task begins processing immediately
   - Progress updates appear in real-time

3. **Monitor Progress:**

   ![Metadata Refresh Progress](/img/task-manager/task-manager-5.jpg)
   - Watch the progress bar advance
   - Read status messages showing current files
   - View estimated completion time
   - Click **Cancel** if needed to stop

4. **Verify Completion:**

   ![Metadata Refresh Complete](/img/task-manager/task-manager-6.jpg)
   - Success status appears with timestamp
   - Review completion information
   - Check affected books to verify changes
   - Database now reflects file metadata

---

## 📊 Task Status Indicators

Understanding what each status means helps you manage tasks effectively.

### Status Badges

**Active States:**
- **In Progress** (Blue badge): Task is currently running with live updates
- **Stale** (Warning badge): Task hasn't updated in 2+ minutes and may be stuck

**Completion States:**
- **Success** (Green dot): Task completed without errors
- **Error** (Red dot): Task failed to complete successfully
- **Warning** (Yellow dot): Task completed but encountered issues
- **Cancelled** (Orange dot): Task was manually stopped

### Task Information Display

**While Running:**
- Current status message and activity
- Visual progress bar with percentage
- Start timestamp and elapsed time
- Cancel button to stop execution

**After Completion:**
- Final status and completion message
- Total execution time
- Completion timestamp
- Any warnings or errors encountered

---

## ⚠️ Handling Stale Tasks

Tasks that become unresponsive need manual intervention.

### What is a Stale Task?

A task becomes "stale" when:
- No status updates received from the booklore server for 2+ minutes
- Progress appears frozen
- May indicate network issues or server problems
- Could be stuck in an infinite loop

### Resolving Stale Tasks

1. **Identify the Issue:**
   - Look for "Stale" warning badge
   - Review last status message
   - Check when updates stopped

2. **Cancel the Task:**
   - Click **Cancel** button
   - Wait for cancellation to complete
   - Task should stop within seconds

3. **Investigate and Retry:**
   - Check network connectivity
   - Verify server is running
   - Restart the task if needed
   - Monitor for recurring issues

:::tip
Stale tasks usually resolve by cancelling and restarting. If the issue persists, check your server logs or network connection.
:::

---

## 🎯 Best Practices

### Cache Management Strategy

1. **Monitor Sizes Regularly**
   - Check cache sizes when browsing tasks
   - Set a threshold for clearing (e.g., >2GB)
   - Clear during low-usage periods

2. **Clearing Frequency**
   - Clear caches monthly for active libraries
   - After major reading sessions
   - Before running low on disk space

:::tip
Monitor cache sizes and clear them monthly for active libraries, or before running low on disk space.
:::

### Metadata Refresh Strategy

1. **Use "Replace Missing Only" For:**
   - Routine maintenance tasks
   - After adding new books
   - When fixing incomplete metadata
   - General synchronization needs

2. **Use "Replace All Metadata" For:**
   - Restoring from file backups
   - Correcting widespread database issues
   - Starting fresh with file-based metadata
   - After bulk file modifications

3. **Before Major Refreshes:**
   - Backup your database
   - Test on a small subset first
   - Document your current metadata state
   - Schedule during low-usage periods

## 🔧 Common Tasks

### Task 1: Free Up Disk Space

**Goal:** Clear caches to reclaim storage

1. Go to **Task Management**
2. Check cache sizes for CBX and PDF
3. Click **Clear Cache** on largest caches
4. Wait for completion confirmation
5. Verify freed space in task descriptions

### Task 2: Sync After Bulk File Changes

**Goal:** Update database with modified file metadata

1. Navigate to **Task Management**
2. Find **Refresh Metadata from Library Files**
3. Select **Replace Missing Only** mode
4. Click **Start Refresh**
5. Monitor progress until completion
6. Verify changes in affected books

### Task 3: Restore Metadata from Files

**Goal:** Overwrite database with file-based metadata

1. Backup your database first
2. Go to **Task Management**
3. Select **Refresh Metadata from Library Files**
4. Choose **Replace All Metadata** mode
5. Click **Start Refresh** and confirm
6. Wait for complete synchronization
7. Verify restored metadata

### Task 4: Handle a Stuck Task

**Goal:** Recover from unresponsive task

1. Identify task with "Stale" badge
2. Review last status message
3. Click **Cancel** button
4. Wait for cancellation confirmation
5. Refresh task list
6. Restart task if needed

### Task 5: Regular Maintenance Routine

**Goal:** Keep library optimized weekly/monthly

1. Review all task statuses
2. Clear caches if >2GB in size
3. Run metadata refresh with "Replace Missing Only"
4. Monitor for any errors or warnings
5. Document completion in your schedule

---

## 🆘 Troubleshooting

### Task Won't Start

**Cause:** Another instance may be running or system busy

**Solution:**
- Refresh the task list
- Wait for current tasks to complete
- Check system resources
- Restart Booklore if needed

### Progress Bar Frozen

**Cause:** WebSocket connection lost or task stalled

**Solution:**
- Click **Refresh** to update manually
- Check network connectivity
- Cancel if task shows "Stale"
- Restart the task

### Metadata Refresh Incomplete

**Cause:** Files moved, deleted, or inaccessible

**Solution:**
- Check task completion message for errors
- Verify library folder permissions
- Ensure files haven't been moved
- Re-run refresh after fixing issues

### Cache Not Clearing

**Cause:** Files in use or permission issues

**Solution:**
- Close all open books
- Ensure no readers are active
- Check folder permissions
- Retry cache clearing

### Changes Don't Appear

**Cause:** Browser cache or page not refreshed

**Solution:**
- Refresh the page manually
- Clear browser cache
- Check task completion status
- Verify in book details view

---

Remember: Task Management keeps your library optimized and synchronized. Regular maintenance ensures smooth operation and efficient storage usage! 🚀✨
